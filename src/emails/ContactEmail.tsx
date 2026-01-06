type ContactEmailProps = {
  name: string;
  email: string;
  project: string;
  details: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function ContactEmailHtml({ name, email, project, details }: ContactEmailProps) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project);
  const safeDetails = escapeHtml(details).replace(/\r?\n/g, "<br />");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Inquiry</title>
  </head>
  <body style="margin:0; background-color:#0b0f1a; font-family:'Sora','Segoe UI',Arial,sans-serif; padding:32px 0;">
    <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
      New inquiry from ${safeName}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:0 auto; background-color:#0f172a; border:1px solid #1f2a44; border-radius:16px; overflow:hidden;">
      <tr>
        <td style="height:6px; background-color:#22d3ee;"></td>
      </tr>
      <tr>
        <td style="padding:28px 32px 8px;">
          <div style="color:#7dd3fc; font-size:12px; letter-spacing:0.3em; text-transform:uppercase; margin:0 0 16px;">
            New Contact Inquiry
          </div>
          <div style="color:#f8fafc; font-size:24px; margin:0 0 6px;">${safeName}</div>
          <div style="color:#94a3b8; font-size:14px; margin:0 0 20px;">${safeEmail}</div>
          <div style="margin:0 0 18px;">
            <div style="color:#94a3b8; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 6px;">
              Project type
            </div>
            <div style="color:#e2e8f0; font-size:15px; line-height:1.6; margin:0;">
              ${safeProject}
            </div>
          </div>
          <div style="margin:0 0 18px;">
            <div style="color:#94a3b8; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 6px;">
              Details
            </div>
            <div style="color:#e2e8f0; font-size:15px; line-height:1.6; margin:0;">
              ${safeDetails}
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="border-top:1px solid #1f2a44; padding:16px 24px 24px;">
          <div style="color:#64748b; font-size:12px; line-height:1.5; margin:0;">
            Reply directly to this email to respond. This message was sent from your portfolio
            contact form.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
