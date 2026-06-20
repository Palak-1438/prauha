import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, budget, description } = body

    // Check if the API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.")
      // Simulate network delay for local testing when key is missing
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return NextResponse.json({ success: true, message: "Message simulated successfully" })
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    // Send the email
    const data = await resend.emails.send({
      from: "Prauha Contact Form <onboarding@resend.dev>", // Note: You'll want to verify your own domain in Resend for production
      to: ["palakdusiya@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (data.error) {
      throw new Error(data.error.message)
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error: unknown) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    )
  }
}