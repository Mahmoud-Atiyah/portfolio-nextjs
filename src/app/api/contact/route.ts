import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  project?: string;
  details: string;
  botField?: string;
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const subject = process.env.CONTACT_SUBJECT || "New Contact Inquiry";

  if (!apiKey || !toEmail || !fromEmail) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project || "Not specified");
  const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

  const html = `
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Project:</strong> ${safeProject}</p>
    <p><strong>Details:</strong></p>
    <p>${safeDetails}</p>
  `;

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
