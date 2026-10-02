const STATS = [
  { value: "20+", label: "Años de experiencia" },
  { value: "1000+", label: "Casos resueltos" },
  { value: "14", label: "Áreas de práctica" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80"
                alt="Oficina legal Azuara y Asociados"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-gold/20" />
          </div>

          {/* Text column */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Acerca de la firma
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-dark sm:text-4xl">
              Más de 20 años defendiendo sus derechos
            </h2>
            <div className="mt-4 h-1 w-16 bg-maroon" />

            <p className="mt-6 leading-relaxed text-gray-600">
              En Azuara y Asociados MX contamos con más de 20 años de
              experiencia en todo tipo de litigios. Somos un grupo de
              profesionales del derecho actualizados en las diversas materias
              jurídicas, para ofrecer servicios legales tanto a la iniciativa
              privada como a particulares.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Somos una firma moderna que nos distinguimos por la honestidad y
              transparencia que ofrecemos a nuestros clientes, a quienes siempre
              mantenemos informados sobre el avance de sus asuntos, así como
              para cualquier duda o inquietud que pueda surgir durante el
              proceso.
            </p>

            <div className="mt-8 rounded-lg border-l-4 border-gold bg-warm-gray p-6">
              <p className="font-heading text-lg font-semibold text-slate-dark">
                Dra. Liliana Azuara Reyes
              </p>
              <p className="text-sm text-gold-dark">Socia Directora</p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-maroon">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
