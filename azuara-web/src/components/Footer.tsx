import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Casos", href: "/#casos" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/#inicio" className="flex items-baseline gap-1">
              <span className="font-heading text-2xl font-bold text-white">
                Azuara
              </span>
              <span className="font-heading text-lg font-light text-gold">
                y Asociados
              </span>
              <span className="font-heading text-sm font-light text-gold/60">
                MX.
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Azuara y Asociados es una firma legal asentada en el Área
              Metropolitana de Monterrey, en el Estado de Nuevo León, México.
              Contamos con más de 20 años de experiencia en diversos tipos de
              litigios.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/AzuaraAsociadosMx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/liliana-azuara-reyes-a500b682/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-gold hover:text-gold"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Menú
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Horario laboral
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Lunes – Viernes: 9AM – 6PM</li>
              <li>Sábado – Domingo: Cerrado</li>
            </ul>

            <h4 className="mb-4 mt-8 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Abogados
            </h4>
            <p className="text-sm">Dra. Liliana Azuara – Socia Directora</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Azuara y Asociados MX. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
