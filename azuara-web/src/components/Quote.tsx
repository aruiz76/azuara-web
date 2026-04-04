export default function Quote() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-maroon-dark/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Decorative icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
          </svg>
        </div>

        <div className="mx-auto mb-6 h-px w-24 bg-gold/40" />

        <blockquote>
          <p className="font-heading text-2xl font-medium leading-relaxed text-white sm:text-3xl md:text-4xl">
            El poder del abogado está en el entendimiento profundo de la ley.
          </p>
        </blockquote>

        <div className="mx-auto mt-6 h-px w-24 bg-gold/40" />

        <a
          href="#contacto"
          className="mt-10 inline-block rounded-sm border-2 border-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-white"
        >
          Agenda tu consulta
        </a>
      </div>
    </section>
  );
}
