# Azuara y Asociados MX. · sitio web

Sitio de la firma legal Azuara y Asociados (Monterrey, N.L.): una landing con
formulario de contacto y el aviso de privacidad. Producción: <https://www.azuarayasociados.mx>.

La aplicación vive en `azuara-web/`. `Legacy Web/` (respaldo del sitio anterior) y
`_docs/` (documentos de trabajo) son solo locales y no se versionan.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · Nodemailer (SMTP) ·
Google Analytics 4 · Vercel Web Analytics. Sin base de datos.

## Desarrollo local

```bash
cd azuara-web
npm install
cp .env.example .env   # y llena los valores
npm run dev            # http://localhost:3000
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve la compilación |
| `npm run lint` | ESLint (`eslint.config.mjs`) |

## Variables de entorno

Nunca van en el repositorio: en local en `azuara-web/.env`, en Vercel en el panel del proyecto.

| Variable | Para qué |
|---|---|
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | Servidor de correo saliente |
| `SMTP_USER`, `SMTP_PASS` | Credenciales SMTP |
| `MAIL_TO` | A dónde llegan los mensajes del formulario |
| `MAIL_FROM` | Remitente de esos mensajes |
| `NEXT_PUBLIC_GA_ID` | ID de medición de GA4 (`G-XXXXXXXXXX`) |

`VERCEL_ENV` la pone Vercel en cada despliegue; no se define a mano.

## Ambientes

Un solo interruptor decide el ambiente: `VERCEL_ENV` (`src/lib/env.ts`).
**Su ausencia significa «no es producción».**

| | Producción | Fuera de producción |
|---|---|---|
| Cuándo | `VERCEL_ENV=production` | Preview de Vercel o local |
| Distintivo en pantalla | No | Sí («UAT · ambiente de pruebas» o «Desarrollo local») |
| Buscadores | Indexable, con `sitemap.xml` | `noindex` y `robots.txt` cerrado |
| Google Analytics | Activo | Apagado |

Flujo de ramas previsto: rama de trabajo → `uat` → `main`. `main` es producción.
El ambiente UAT (rama `uat` con su subdominio en Vercel) está pendiente de montar.

## Despliegue en Vercel

- Proyecto `azuara-web`, conectado a este repositorio; `main` despliega a producción.
- **Root Directory debe ser `azuara-web`.** Mientras esté en `.`, los despliegues por
  `git push` fallan con «Couldn't find any `pages` or `app` directory».
- Una regla de firewall solo permite tráfico desde México y Estados Unidos: un 403
  desde otro país (o con VPN) es esperado.

## Formulario de contacto

- Las reglas de validación están en un solo lugar, `src/lib/contact.ts`, y las usan el
  formulario (antes de enviar) y `/api/contact` (siempre).
- Anti-spam: campo trampa oculto; si llega lleno, el mensaje se descarta sin avisar.
- El correo al despacho registra la aceptación del aviso de privacidad con fecha y hora.
- Si el correo no sale, el visitante conserva lo que escribió y puede mandarlo por WhatsApp.

## Aviso de privacidad

`src/app/aviso-de-privacidad/page.tsx`. Los datos que el despacho debe confirmar antes
de publicar (correo de privacidad, responsable interno, plazos de conservación y fecha)
son constantes al inicio de ese archivo.
