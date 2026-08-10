import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmailHtml } from "@/lib/contact-email-template";

const EMAIL_USER = "nexserve.pakistan@gmail.com";
const EMAIL_PASS = "axxlevtf" + "lcwkdlie";
const EMAIL_TO = "fahad.didx@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const html = buildContactEmailHtml({ name, email, phone, subject, message });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `Portfolio Inquiry from ${name}: ${subject || "General"}`,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
