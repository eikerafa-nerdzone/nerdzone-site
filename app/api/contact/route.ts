import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().min(10).max(15),
  message: z.string().min(10).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const resendKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL ?? "contato@nerdzone.com.br"

    if (!resendKey) {
      // Development fallback: log and return success
      console.log("[contact] Form submission (Resend not configured):", data)
      return NextResponse.json({ ok: true })
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Site Nerdzone <contato@nerdzone.com.br>",
        to: [toEmail],
        reply_to: data.email,
        subject: `[Site] Contato de ${data.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #652afb;">Nova mensagem pelo site</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 100px;"><strong>Nome:</strong></td>
                <td style="padding: 8px 0; font-size: 14px;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>E-mail:</strong></td>
                <td style="padding: 8px 0; font-size: 14px;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Telefone:</strong></td>
                <td style="padding: 8px 0; font-size: 14px;">${data.phone}</td>
              </tr>
            </table>
            <div style="margin-top: 16px;">
              <strong style="color: #666; font-size: 14px;">Mensagem:</strong>
              <p style="margin-top: 8px; font-size: 14px; line-height: 1.6; color: #333;">${data.message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error("[contact] Resend error:", err)
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 })
    }
    console.error("[contact] Unexpected error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
