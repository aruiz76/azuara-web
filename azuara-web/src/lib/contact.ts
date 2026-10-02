// Catálogo y límites del formulario de contacto, compartidos por el formulario y /api/contact
export const SERVICE_OPTIONS = [
  "Aclaración ante el Registro Civil",
  "Divorcios",
  "Cambio de Régimen Conyugal",
  "Pensiones Alimenticias",
  "Órdenes de Protección y Separación",
  "Reconocimiento de Paternidad",
  "Pérdida de Patria Potestad",
  "Juicios Sucesorios",
  "Arrendamientos",
  "Diseño y Elaboración de Contratos",
  "Derecho Constitucional / Amparos",
  "Juicios Laborales",
  "Derecho Empresarial",
  "Asuntos Penales",
];

export const FIELD_LIMITS = {
  nombre: 80,
  apellidos: 120,
  correo: 254,
  telefono: 30,
  mensaje: 12_000,
};

// Campo trampa: una persona no lo ve ni lo llena; un bot sí
export const HONEYPOT_FIELD = "website";

export type ContactValues = {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  aceptaAviso: boolean;
};

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

// En el orden del formulario, que es el orden en que se listan los errores
export const CONTACT_FIELDS: ContactField[] = [
  "nombre",
  "apellidos",
  "correo",
  "telefono",
  "servicio",
  "mensaje",
  "aceptaAviso",
];

const LIMIT_LABELS: Record<keyof typeof FIELD_LIMITS, string> = {
  nombre: "El nombre",
  apellidos: "Los apellidos",
  correo: "El correo electrónico",
  telefono: "El teléfono",
  mensaje: "El mensaje",
};

// Única definición de las reglas: la usa el formulario antes de enviar y /api/contact al recibir.
// Cada mensaje dice el requisito, no la falta.
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.nombre) errors.nombre = "Escribe tu nombre.";
  if (!values.apellidos) errors.apellidos = "Escribe tus apellidos.";
  if (!values.correo) {
    errors.correo = "Escribe tu correo electrónico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = "Escribe un correo con el formato nombre@dominio.com.";
  }
  if (values.servicio && !SERVICE_OPTIONS.includes(values.servicio)) {
    errors.servicio = "Elige un servicio de la lista.";
  }
  if (!values.mensaje) errors.mensaje = "Describe brevemente tu caso.";
  if (!values.aceptaAviso) {
    errors.aceptaAviso =
      "Marca la casilla del aviso de privacidad para enviar tu mensaje.";
  }

  for (const field of Object.keys(FIELD_LIMITS) as (keyof typeof FIELD_LIMITS)[]) {
    if (values[field].length > FIELD_LIMITS[field]) {
      errors[field] =
        `${LIMIT_LABELS[field]} debe tener máximo ${FIELD_LIMITS[field].toLocaleString("es-MX")} caracteres.`;
    }
  }

  return errors;
}

const WHATSAPP_MESSAGE_MAX = 1500;

// Respaldo cuando el correo no sale: el mensaje ya escrito viaja por WhatsApp
export function whatsappFallbackUrl(values: ContactValues, phone: string): string {
  const text = [
    `Hola, soy ${values.nombre} ${values.apellidos}.`,
    values.servicio ? `Me interesa asesoría en: ${values.servicio}.` : null,
    values.mensaje.slice(0, WHATSAPP_MESSAGE_MAX),
  ]
    .filter(Boolean)
    .join("\n\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
