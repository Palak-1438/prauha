import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing")
      return NextResponse.json(
        { success: false, message: "Email service is not configured (missing API key)." },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { name, email, company, budget, description } = body

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Using Resend's default onboarding email for testing, or better yet, a verified domain.
      to: ["palakdusiya@gmail.com"],
      subject: `New Project Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Budget: ${budget || 'N/A'}

Description:
${description}
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { success: false, message: "Failed to send email via provider. Please try again." },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (err) {
    console.error("Internal server error in contact route:", err)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}