const BRAND_DARK = "#0f172a";
const BRAND_ACCENT = "#6366f1";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
        <p style="margin: 0 0 4px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: ${BRAND_ACCENT};">
          ${label}
        </p>
        <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.5; color: ${BRAND_DARK};">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>
  `;
}

export function buildContactEmailHtml({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message: string;
}) {
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Contact Form</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f8fafc;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
            <tr>
              <td style="background-color: ${BRAND_DARK}; padding: 24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                        Fahad<span style="color: ${BRAND_ACCENT};">Naeem</span>
                      </p>
                      <p style="margin: 4px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #94a3b8;">
                        Portfolio Contact Submission
                      </p>
                    </td>
                    <td align="right" valign="top">
                      <span style="display: inline-block; padding: 6px 12px; border-radius: 999px; background-color: rgba(99, 102, 241, 0.15); font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; color: ${BRAND_ACCENT};">
                        New Message
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 28px 32px 8px;">
                <h1 style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 20px; line-height: 1.3; color: ${BRAND_DARK}; font-weight: 700;">
                  New Inquiry Received
                </h1>
                <p style="margin: 8px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; color: #475569;">
                  A message was sent via the contact form on your developer portfolio.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 32px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow("Sender Name", name)}
                  ${fieldRow("Email Address", email || "Not provided")}
                  ${fieldRow("Phone Number", phone)}
                  ${fieldRow("Subject / Inquiry Type", subject || "General Inquiry")}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 0 32px 28px;">
                <div style="border-radius: 8px; border: 1px solid #e2e8f0; background-color: #f8fafc; padding: 16px 20px;">
                  <p style="margin: 0 0 6px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: ${BRAND_ACCENT};">
                    Message
                  </p>
                  <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; color: ${BRAND_DARK};">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background-color: #f1f5f9; padding: 16px 32px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 1.6; color: #64748b; text-align: center;">
                  This message was sent from the contact form on your portfolio website.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
