import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { contactFormSchema } from "@/lib/schemas/contact"

export const runtime = "nodejs"

const requiredEnvVars = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

const missing = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key)

const recipient = process.env.CONTACT_RECIPIENT || requiredEnvVars.user
const fromAddress = process.env.CONTACT_FROM_EMAIL || requiredEnvVars.user

export async function POST(request: Request) {
  if (missing.length > 0 || !recipient || !fromAddress) {
    return NextResponse.json(
      { error: "Mail service is not configured on the server." },
      { status: 500 }
    )
  }

  const payload = await request.json().catch(() => null)
  const parsed = contactFormSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the provided information and try again." },
      { status: 400 }
    )
  }

  const { name, email, message } = parsed.data

  const host = requiredEnvVars.host!
  const port = Number(requiredEnvVars.port)
  const user = requiredEnvVars.user!
  const pass = requiredEnvVars.pass!
  const mailRecipient = recipient!
  const from = fromAddress!
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    })

    await transporter.sendMail({
      from,
      to: mailRecipient,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send contact form email", error)
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 500 }
    )
  }
}
