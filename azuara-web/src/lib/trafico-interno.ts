"use client";

import { useSyncExternalStore } from "react";

/**
 * La marca de «este dispositivo es del equipo», en un solo lugar.
 *
 * Se activa una sola vez por navegador visitando `?interno=1` y se quita con
 * `?interno=0`. Va por dispositivo y no por IP para que siga funcionando al cambiar
 * de red: otra oficina, la casa o los datos del celular.
 */
const BANDERA = "azuara_trafico_interno";

// Se aplica al cargar el módulo, antes del primer render: así la visita que pone la
// marca tampoco se cuenta.
if (typeof window !== "undefined") {
  try {
    const param = new URLSearchParams(window.location.search).get("interno");
    if (param === "1") localStorage.setItem(BANDERA, "1");
    if (param === "0") localStorage.removeItem(BANDERA);
  } catch {
    // Ventana privada o almacenamiento bloqueado: el dispositivo queda sin marca
  }
}

const estaMarcado = () => {
  try {
    return localStorage.getItem(BANDERA) === "1";
  } catch {
    return false;
  }
};
const sinSuscripcion = () => () => {}; // el valor no cambia durante la sesión

/** ¿Es un dispositivo del equipo? En el servidor nunca hay marca. */
export function useEsInterno(): boolean {
  return useSyncExternalStore(sinSuscripcion, estaMarcado, () => false);
}

/**
 * ¿Se puede cargar la analítica? En el servidor y durante la hidratación la respuesta
 * es «no»: los scripts de medición solo se montan cuando ya se leyó el dispositivo y
 * se sabe que no está marcado. Así no hay carrera entre la marca y la primera visita.
 */
export function usePuedeMedir(): boolean {
  return useSyncExternalStore(sinSuscripcion, () => !estaMarcado(), () => false);
}
