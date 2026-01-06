import { Resend } from "resend";
import { ContactEmailHtml } from "@/emails/ContactEmail";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  project?: string;
  details: string;
  botField?: string;
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.botField) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const project = payload.project?.trim();
  const details = payload.details?.trim();

  if (!name || !email || !details) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const subject = process.env.CONTACT_SUBJECT || "New Contact Inquiry";
  const formServiceUrl = process.env.FORM_SERVICE_URL;

  if (formServiceUrl) {
    const response = await fetch(formServiceUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        project: project || "Not specified",
        details,
        _replyto: email,
        _subject: subject,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return Response.json(
        { error: data.error || "Failed to send message." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const html = ContactEmailHtml({
    name,
    email,
    project: project || "Not specified",
    details,
  });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    replyTo: email,
    html,
  });

  if (error) {
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
