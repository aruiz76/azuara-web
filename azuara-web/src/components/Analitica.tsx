"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { useEsInterno, usePuedeMedir } from "@/lib/trafico-interno";

/**
 * Carga Google Analytics y Vercel Web Analytics, salvo en los dispositivos del equipo.
 *
 * Un dispositivo marcado con `?interno=1` no carga ningún script de medición: su visita
 * no existe para la analítica, incluida la primera página.
 */
export default function Analitica({ gaId }: { gaId?: string }) {
  const esInterno = useEsInterno();
  const puedeMedir = usePuedeMedir();

  if (puedeMedir) {
    return (
      <>
        <Analytics />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </>
    );
  }

  if (!esInterno) return null;

  // El indicador existe porque la marca puede desaparecer sola: Safari borra el
  // almacenamiento a los 7 días sin visitar el sitio, y también se pierde al limpiar
  // datos, en ventana privada o al cambiar de navegador. Si el punto no está, la
  // visita se está contando.
  return (
    <div
      role="status"
      title="Este dispositivo no cuenta en la analítica. Visita ?interno=0 para quitarlo."
      className="pointer-events-none fixed left-1/2 top-2 z-[60] flex -translate-x-1/2 select-none items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-dark/90 px-3 py-1 text-[10px] uppercase tracking-widest text-white"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      tráfico interno
    </div>
  );
}
