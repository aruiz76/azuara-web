import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 12_000;

type ContactPayload = {
  nombre?: unknown;
  apellidos?: unknown;
  correo?: unknown;
  telefono?: unknown;
  servicio?: unknown;
  mensaje?: unknown;
};

function getSmtpConfig(): SMTPTransport.Options | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || pass === undefined || pass === "") {
    return null;
  }
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true";
  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error("Contact API: missing SMTP_HOST, SMTP_USER, or SMTP_PASS");
    return NextResponse.json(
      { error: "Servicio de correo no configurado." },
      { status: 500 },
    );
  }

  let raw: ContactPayload;
  try {
    raw = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = String(raw.nombre ?? "").trim();
  const apellidos = String(raw.apellidos ?? "").trim();
  const correo = String(raw.correo ?? "").trim();
  const telefono = String(raw.telefono ?? "").trim();
  const servicio = String(raw.servicio ?? "").trim();
  const mensaje = String(raw.mensaje ?? "").trim();

  if (!nombre || !apellidos || !correo || !mensaje) {
    return NextResponse.json(
      { error: "Completa los campos obligatorios." },
      { status: 400 },
    );
  }

  if (!isValidEmail(correo)) {
    return NextResponse.json({ error: "Correo electrónico no válido." }, { status: 400 });
  }

  if (mensaje.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "El mensaje es demasiado largo." },
      { status: 400 },
    );
  }

  const mailTo =
    process.env.MAIL_TO?.trim() || "notificaciones@azuarayasociados.mx";
  const mailFrom =
    process.env.MAIL_FROM?.trim() || "contacto@azuarayasociados.mx";

  const transporter = nodemailer.createTransport(smtp);

  const lines = [
    `Nombre: ${nombre} ${apellidos}`,
    `Correo: ${correo}`,
    telefono ? `Teléfono: ${telefono}` : null,
    servicio ? `Servicio de interés: ${servicio}` : null,
    "",
    "Mensaje:",
    mensaje,
  ].filter((l): l is string => l !== null);

  const textBody = lines.join("\n");
  const htmlBody = `
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)} ${escapeHtml(apellidos)}</p>
    <p><strong>Correo:</strong> <a href="mailto:${escapeHtml(correo)}">${escapeHtml(correo)}</a></p>
    ${telefono ? `<p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>` : ""}
    ${servicio ? `<p><strong>Servicio de interés:</strong> ${escapeHtml(servicio)}</p>` : ""}
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
  `.trim();

  try {
    await transporter.sendMail({
      from: `"Sitio web — Azuara y Asociados" <${mailFrom}>`,
      to: mailTo,
      replyTo: correo,
      subject: `Nuevo contacto web: ${nombre} ${apellidos}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("Contact API: SMTP send failed", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
