import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Master Event <contact@masterevent.com.ar>",
      to: "lemmojuanignacio@gmail.com",
      subject: `Nueva consulta - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #10221F; color: #F1F5F9; padding: 32px; border-radius: 12px;">
          <h2 style="color: #25F4D1; margin-bottom: 24px;">Nueva consulta desde Master Event</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; width: 140px;">Nombre</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 32px; font-size: 11px; color: #475569;">Master Event © 2026 — Mendoza, Argentina</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}