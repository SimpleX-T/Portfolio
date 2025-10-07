import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables"
    );
    return NextResponse.json(
      { success: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    replyTo: email,
    to: "ntmark2004@gmail.com",
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
