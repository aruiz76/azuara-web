import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azuara y Asociados MX. | Firma Legal en Monterrey",
  description:
    "Más de 20 años de experiencia en Derecho Civil, Familiar, Laboral, Penal, Empresarial y Amparos. Firma legal en el Área Metropolitana de Monterrey, Nuevo León.",
  keywords: [
    "abogados Monterrey",
    "firma legal Nuevo León",
    "derecho familiar",
    "divorcios",
    "pensiones alimenticias",
    "amparos",
    "derecho laboral",
    "derecho empresarial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-body antialiased text-slate-dark">{children}</body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
