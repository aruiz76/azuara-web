import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Datos estructurados: le dicen a Google que el sitio es un despacho, con su domicilio,
// teléfono y horario. Salen de lib/site, igual que el resto del sitio.
const LEGAL_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#despacho`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: BUSINESS.telephone,
  address: { "@type": "PostalAddress", ...BUSINESS.address },
  areaServed: BUSINESS.areaServed,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: BUSINESS.openingHours.days,
    opens: BUSINESS.openingHours.opens,
    closes: BUSINESS.openingHours.closes,
  },
  sameAs: BUSINESS.sameAs,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LEGAL_SERVICE_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Quote />
        <Cases />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
