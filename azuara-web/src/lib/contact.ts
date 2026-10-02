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
