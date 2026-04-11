import nodemailer from "nodemailer";

/**
 * Creates and returns a reusable Nodemailer transporter
 * configured via environment variables.
 */
export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

/**
 * Sends the contact form email to Rufat.
 */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = createTransporter();
  const toAddress = process.env.EMAIL_TO || "rufatazizzade@gmail.com";

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: toAddress,
    replyTo: data.email,
    subject: `[Contact] ${data.subject}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #0ea5e9); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Message</h1>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: 600; color: #475569; margin-bottom: 8px;">Message:</p>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
      </div>
    `,
  });
}

/**
 * Sends the proposal form email to Rufat with structured business-style formatting.
 */
export async function sendProposalEmail(data: {
  fullName: string;
  company: string;
  email: string;
  proposalType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}) {
  const transporter = createTransporter();
  const toAddress = process.env.EMAIL_TO || "rufatazizzade@gmail.com";

  await transporter.sendMail({
    from: `"Portfolio Proposal Form" <${process.env.EMAIL_USER}>`,
    to: toAddress,
    replyTo: data.email,
    subject: `[Proposal] ${data.proposalType} from ${data.company || data.fullName}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #2563eb, #0ea5e9); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Business Proposal</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">${data.proposalType}</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 140px;">Full Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Proposal Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.proposalType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Budget Range</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.budgetRange || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Timeline</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.timeline || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: 600; color: #475569; margin-bottom: 8px;">Message / Details:</p>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">Sent from portfolio proposal form</p>
      </div>
    `,
  });
}
