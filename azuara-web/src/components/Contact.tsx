"use client";

import { useState, type FormEvent } from "react";
import { FIELD_LIMITS, HONEYPOT_FIELD, SERVICE_OPTIONS } from "@/lib/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nombre: String(fd.get("nombre") ?? "").trim(),
      apellidos: String(fd.get("apellidos") ?? "").trim(),
      correo: String(fd.get("correo") ?? "").trim(),
      telefono: String(fd.get("telefono") ?? "").trim(),
      servicio: String(fd.get("servicio") ?? "").trim(),
      mensaje: String(fd.get("mensaje") ?? "").trim(),
      aceptaAviso: fd.get("acepta_aviso") === "on",
      [HONEYPOT_FIELD]: String(fd.get(HONEYPOT_FIELD) ?? ""),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "No se pudo enviar el mensaje.");
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Error de conexión. Verifica tu red e intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-dark/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contacto
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Contáctanos
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          <p className="mt-6 leading-relaxed text-white/70">
            Llena el siguiente formulario y uno de nuestros asociados se
            comunicará lo antes posible contigo para darle seguimiento a tu caso
            y brindarte la asesoría que necesitas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-white">
                  Horario
                </h4>
              </div>
              <p className="text-sm text-white/70">Lunes a Viernes: 9:00 AM – 6:00 PM</p>
              <p className="text-sm text-white/70">Sábado y Domingo: Cerrado</p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-white">
                  Ubicación
                </h4>
              </div>
              <p className="text-sm text-white/70">
                Área Metropolitana de Monterrey,
                <br />
                Nuevo León, México
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-white">
                  Redes sociales
                </h4>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/AzuaraAsociadosMx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/liliana-azuara-reyes-a500b682/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white p-8 shadow-2xl sm:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-dark">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error ? (
                    <div
                      className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                      role="alert"
                    >
                      {error}
                    </div>
                  ) : null}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-dark">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        maxLength={FIELD_LIMITS.nombre}
                        autoComplete="given-name"
                        placeholder="Tu nombre"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="mb-1 block text-sm font-medium text-slate-dark">
                        Apellidos
                      </label>
                      <input
                        id="apellidos"
                        name="apellidos"
                        type="text"
                        required
                        maxLength={FIELD_LIMITS.apellidos}
                        autoComplete="family-name"
                        placeholder="Tus apellidos"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="correo" className="mb-1 block text-sm font-medium text-slate-dark">
                        Correo electrónico
                      </label>
                      <input
                        id="correo"
                        name="correo"
                        type="email"
                        required
                        maxLength={FIELD_LIMITS.correo}
                        autoComplete="email"
                        placeholder="tu@correo.com"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-slate-dark">
                        Teléfono{" "}
                        <span className="font-normal text-gray-500">(opcional)</span>
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        maxLength={FIELD_LIMITS.telefono}
                        autoComplete="tel"
                        placeholder="81 1234 5678"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servicio" className="mb-1 block text-sm font-medium text-slate-dark">
                      Estoy interesado en asesoría en{" "}
                      <span className="font-normal text-gray-500">(opcional)</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-dark">
                      Háblanos más sobre tu caso
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      maxLength={FIELD_LIMITS.mensaje}
                      placeholder="Describe brevemente tu situación..."
                      className="w-full resize-none rounded-md border border-gray-200 px-4 py-3 text-sm text-slate-dark transition-colors focus:border-maroon focus:ring-2 focus:ring-maroon/20 focus:outline-none"
                    />
                  </div>

                  {/* Campo trampa anti-spam: fuera de pantalla, del tabulador y de lectores de pantalla */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor={HONEYPOT_FIELD}>No llenes este campo</label>
                    <input
                      id={HONEYPOT_FIELD}
                      name={HONEYPOT_FIELD}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <input
                      type="checkbox"
                      name="acepta_aviso"
                      required
                      className="mt-0.5 h-6 w-6 shrink-0 accent-maroon"
                    />
                    <span>
                      He leído y acepto el{" "}
                      <a
                        href="/aviso-de-privacidad"
                        target="_blank"
                        className="font-semibold text-maroon underline underline-offset-2 hover:text-gold-dark"
                      >
                        Aviso de privacidad
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-maroon px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-maroon-light hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando…" : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
