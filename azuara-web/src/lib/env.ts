// VERCEL_ENV lo pone la plataforma en cada despliegue; nunca va en un archivo versionado.
// Su ausencia significa «no es producción».
export const isProduction = process.env.VERCEL_ENV === "production";

export const environmentLabel = isProduction
  ? null
  : process.env.VERCEL_ENV === "preview"
    ? "UAT · ambiente de pruebas"
    : "Desarrollo local";
