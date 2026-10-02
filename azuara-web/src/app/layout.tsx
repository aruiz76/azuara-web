import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import EnvironmentBadge from "@/components/EnvironmentBadge";
import { isProduction } from "@/lib/env";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
  robots: { index: isProduction, follow: isProduction },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = isProduction ? process.env.NEXT_PUBLIC_GA_ID : undefined;

  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-body antialiased text-slate-dark">
        {children}
        <EnvironmentBadge />
        <Analytics />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
