export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-dark"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-maroon-dark/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
          Firma Legal en Monterrey, N.L.
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
          Azuara &amp; Asociados
          <br />
          <span className="text-gold">Abogados</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
          Si deseamos respeto por la ley, nosotros debemos primero hacer la ley
          respetar.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contacto"
            className="inline-block rounded-sm bg-maroon px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-maroon-light hover:shadow-xl"
          >
            Pregunta por asesoría
          </a>
          <a
            href="#servicios"
            className="inline-block rounded-sm border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10"
          >
            Nuestros servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
