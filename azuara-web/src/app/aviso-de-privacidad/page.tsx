import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_NAME } from "@/lib/site";
import {
  LegalMail,
  LegalSection,
  LegalSubheading,
  LegalTable,
  LegalToc,
  type LegalSectionData,
} from "@/components/Legal";

const PAGE_TITLE = "Aviso de privacidad | Azuara y Asociados MX.";
const PAGE_DESCRIPTION =
  "Aviso de privacidad integral de Firma Legal Azuara y Asociados, S.C. Tratamiento de datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/aviso-de-privacidad" },
  openGraph: {
    type: "article",
    locale: "es_MX",
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/aviso-de-privacidad",
    images: ["/opengraph-image"],
  },
};

// Datos por confirmar con el Despacho antes de publicar
const LAST_UPDATED = "1 de octubre de 2026";
const PRIVACY_EMAIL = "privacidad@azuarayasociados.mx";
const PRIVACY_OFFICER: string | null = null;
const LEAD_RETENTION = "doce";
const CASE_RETENTION = "cinco";

const LIST = "list-disc space-y-2 pl-5";

function B({ children }: { children: ReactNode }) {
  return <strong className="text-slate-dark">{children}</strong>;
}

function Mono({ children }: { children: ReactNode }) {
  return <span className="font-mono text-sm">{children}</span>;
}

const SECTIONS: LegalSectionData[] = [
  {
    id: "responsable",
    title: "Identidad y domicilio del responsable",
    content: (
      <>
        <p>
          <B>Firma Legal Azuara y Asociados, S.C.</B> (en adelante, «el
          Despacho» o «el responsable»), con domicilio en Bosques 131, Col.
          Arboledas de Corregidora, C.P. 67123, Guadalupe, Nuevo León, es
          responsable del tratamiento de los datos personales que usted
          proporcione a través del sitio <B>www.azuarayasociados.mx</B>, de
          los canales de contacto asociados a él y con motivo de la prestación
          de servicios jurídicos.
        </p>
        <p>
          Para cualquier asunto relacionado con este aviso o con el
          tratamiento de sus datos personales, el Despacho pone a su
          disposición los siguientes medios de contacto:
        </p>
        <ul className={LIST}>
          <li>
            Correo electrónico: <LegalMail address={PRIVACY_EMAIL} />
          </li>
          <li>Teléfono: 81 1712 3014</li>
          {PRIVACY_OFFICER ? (
            <li>Responsable interno de datos personales: {PRIVACY_OFFICER}</li>
          ) : null}
        </ul>
      </>
    ),
  },
  {
    id: "datos",
    title: "Datos personales que se tratan",
    content: (
      <>
        <p>
          El Despacho trata las siguientes categorías de datos personales,
          según el canal por el que usted se comunique y el tipo de servicio
          que solicite:
        </p>
        <LegalTable
          head={["Origen", "Datos"]}
          rows={[
            [
              <B key="o">Sitio web</B>,
              "Dirección IP, tipo de dispositivo y navegador, sistema operativo, páginas visitadas, tiempo de permanencia y origen del acceso. Se recaban mediante cookies y tecnologías similares (sección 11).",
            ],
            [
              <B key="o">Formulario de contacto, correo, teléfono y WhatsApp</B>,
              "Nombre, número telefónico, correo electrónico, ciudad y la descripción general del asunto que usted comparta para solicitar una asesoría.",
            ],
            [
              <B key="o">Redes sociales</B>,
              "Nombre de usuario público y contenido de los mensajes que usted envíe por Facebook o LinkedIn.",
            ],
            [
              <B key="o">Prestación del servicio jurídico</B>,
              "Datos de identificación (nombre, fecha de nacimiento, nacionalidad, estado civil, CURP, copia de identificación oficial), domicilio, datos de contacto, datos laborales, datos patrimoniales y financieros, documentación del asunto (contratos, escrituras, actas, expedientes, resoluciones) y, en su caso, poderes o documentos de representación.",
            ],
            [
              <B key="o">Facturación y pagos</B>,
              "RFC, razón social o nombre, régimen fiscal, código postal, uso de CFDI y datos de la operación de pago (referencia y fecha; el Despacho no almacena números completos de tarjeta).",
            ],
            [
              <B key="o">Terceros relacionados con el asunto</B>,
              "Datos de contrapartes, testigos, familiares, beneficiarios u otras personas que usted proporcione o que consten en la documentación del asunto, en la medida necesaria para atenderlo.",
            ],
          ]}
        />
        <LegalSubheading>Datos personales sensibles</LegalSubheading>
        <p>
          Por la naturaleza de los servicios jurídicos, y{" "}
          <B>solo cuando el asunto lo requiera</B>, el Despacho podrá tratar
          datos personales sensibles, tales como: estado de salud presente o
          futuro (por ejemplo, en asuntos de incapacidad, riesgos de trabajo o
          responsabilidad civil), información sobre vida familiar o relaciones
          de pareja (asuntos familiares y sucesorios), y otra información que
          por su naturaleza se considere sensible conforme a la Ley.
        </p>
        <p>
          Estos datos se tratarán{" "}
          <B>únicamente con su consentimiento expreso y por escrito</B>, el
          cual se recabará mediante su firma en el contrato o carta de
          prestación de servicios, o en el formato que el Despacho le
          proporcione, y bajo las medidas de seguridad reforzadas descritas en
          la sección 13.
        </p>
        <LegalSubheading>Datos de terceros</LegalSubheading>
        <p>
          Cuando usted proporcione datos personales de terceros (contrapartes,
          testigos, familiares u otras personas), declara que cuenta con la
          facultad para hacerlo o que les ha informado del contenido de este
          aviso, y que dichos datos son necesarios para la atención de su
          asunto.
        </p>
        <LegalSubheading>Datos de menores de edad</LegalSubheading>
        <p>
          El sitio y los canales de contacto están dirigidos a personas
          mayores de edad. En asuntos que involucren a menores de edad o
          personas en estado de interdicción (por ejemplo, guarda y custodia,
          pensión alimenticia o sucesiones), sus datos se recabarán por
          conducto de quien ejerza la patria potestad, tutela o representación
          legal, y se tratarán exclusivamente para la atención del asunto.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades del tratamiento",
    content: (
      <>
        <LegalSubheading>
          Finalidades necesarias para la relación jurídica
        </LegalSubheading>
        <p>
          Son indispensables para la relación entre usted y el Despacho. Sin
          ellas no es posible prestar el servicio:
        </p>
        <ul className={LIST}>
          <li>
            Atender su solicitud de información o de asesoría inicial y
            evaluar la viabilidad de su asunto.
          </li>
          <li>
            Elaborar cotizaciones, propuestas de honorarios y el contrato o
            carta de prestación de servicios.
          </li>
          <li>
            Prestar los servicios jurídicos contratados: asesoría, elaboración
            y revisión de documentos, negociación, representación y patrocinio
            ante autoridades judiciales, administrativas, laborales o
            arbitrales.
          </li>
          <li>Integrar, administrar y resguardar el expediente de su asunto.</li>
          <li>
            Comunicarse con usted para dar seguimiento a su asunto, informarle
            avances y resolver dudas.
          </li>
          <li>
            Verificar su identidad y, en su caso, la representación de quien
            actúa en su nombre.
          </li>
          <li>
            Emitir el comprobante fiscal digital (CFDI) y llevar el control de
            pagos y cobranza.
          </li>
          <li>
            Verificar su elegibilidad cuando usted solicite un beneficio
            derivado de un convenio entre el Despacho y la empresa o
            institución con la que usted colabora.
          </li>
          <li>Cumplir con las obligaciones legales aplicables al Despacho.</li>
        </ul>
        <LegalSubheading>
          Finalidades que requieren su consentimiento
        </LegalSubheading>
        <p>
          No son necesarias para la prestación del servicio, pero permiten
          mejorarlo.{" "}
          <B>
            Usted puede negarse a estas finalidades sin que ello afecte la
            atención de su asunto
          </B>{" "}
          (sección 4):
        </p>
        <ul className={LIST}>
          <li>
            Enviarle boletines, avisos de cambios legislativos, invitaciones a
            eventos o información sobre los servicios del Despacho.
          </li>
          <li>Aplicar encuestas de calidad y satisfacción.</li>
          <li>
            Analizar de forma estadística y agregada el uso del sitio para
            mejorar sus contenidos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "negativa",
    title: "Negativa para finalidades que requieren su consentimiento",
    content: (
      <>
        <p>
          Si usted no desea que sus datos personales se traten para las
          finalidades señaladas en el segundo apartado de la sección anterior,
          puede manifestarlo desde este momento enviando un correo a{" "}
          <LegalMail address={PRIVACY_EMAIL} /> con el asunto «Negativa de
          finalidades adicionales», indicando su nombre y el medio por el que
          contactó al Despacho.
        </p>
        <p>
          Su negativa <B>no será motivo para negarle los servicios</B> que
          solicita ni para dar por terminada la relación con el Despacho. La
          solicitud se atenderá en un plazo máximo de cinco días hábiles.
        </p>
      </>
    ),
  },
  {
    id: "arco",
    title: "Derechos ARCO y cómo ejercerlos",
    content: (
      <>
        <p>Usted, o su representante legal, tiene derecho a:</p>
        <LegalTable
          head={["Derecho", "En qué consiste"]}
          rows={[
            [
              <B key="d">Acceso</B>,
              "Conocer qué datos personales suyos tiene el Despacho, así como las condiciones y generalidades de su tratamiento.",
            ],
            [
              <B key="d">Rectificación</B>,
              "Solicitar la corrección de sus datos cuando sean inexactos o estén incompletos.",
            ],
            [
              <B key="d">Cancelación</B>,
              "Solicitar que sus datos se eliminen de los registros del Despacho cuando considere que no se requieren para alguna de las finalidades señaladas.",
            ],
            [
              <B key="d">Oposición</B>,
              "Oponerse al uso de sus datos para fines específicos.",
            ],
          ]}
        />
        <LegalSubheading>Cómo presentar la solicitud</LegalSubheading>
        <p>
          Envíe un correo electrónico a <LegalMail address={PRIVACY_EMAIL} />{" "}
          con el asunto «Solicitud de derechos ARCO», o entréguela por escrito
          en el domicilio del Despacho. La solicitud debe contener:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Su nombre y un domicilio o correo electrónico para comunicarle la
            respuesta.
          </li>
          <li>
            Los documentos que acrediten su identidad o, en su caso, la
            representación legal de quien presenta la solicitud.
          </li>
          <li>
            La descripción clara y precisa de los datos personales respecto de
            los que busca ejercer alguno de los derechos.
          </li>
          <li>
            Cualquier otro elemento que facilite la localización de sus datos,
            como el número de expediente o la fecha aproximada en que contrató
            los servicios.
          </li>
          <li>
            Cuando se trate de una rectificación, la documentación que
            sustente la modificación solicitada.
          </li>
        </ol>
        <LegalSubheading>Plazos de respuesta</LegalSubheading>
        <p>
          El Despacho le comunicará la determinación adoptada en un plazo
          máximo de <B>veinte días hábiles</B> contados desde la recepción de
          la solicitud. De resultar procedente, se hará efectiva dentro de los{" "}
          <B>quince días hábiles</B> siguientes. Estos plazos podrán ampliarse
          una sola vez por un periodo igual cuando las circunstancias lo
          justifiquen.
        </p>
        <p>
          El ejercicio de los derechos ARCO es <B>gratuito</B>; solo deberán
          cubrirse, en su caso, los gastos justificados de envío o de
          reproducción de copias.
        </p>
        <LegalSubheading>Cuándo puede negarse una solicitud</LegalSubheading>
        <p>
          El Despacho podrá negar la solicitud cuando el solicitante no sea el
          titular o no acredite la representación; cuando los datos no obren
          en sus registros; cuando se lesionen derechos de un tercero; cuando
          exista impedimento legal, resolución de autoridad o un procedimiento
          judicial en curso que requiera conservarlos; o cuando la
          rectificación, cancelación u oposición ya se haya realizado. En
          todos los casos la negativa será fundada, motivada e informada.
        </p>
      </>
    ),
  },
  {
    id: "revocacion",
    title: "Revocación del consentimiento",
    content: (
      <>
        <p>
          Usted puede revocar en cualquier momento el consentimiento que haya
          otorgado para el tratamiento de sus datos personales, mediante el
          mismo procedimiento descrito en la sección 5.
        </p>
        <p>
          Por razones legales o contractuales, la revocación no siempre podrá
          ser inmediata ni total: el Despacho podrá conservar la información
          estrictamente necesaria para cumplir obligaciones fiscales, atender
          asuntos en trámite ante autoridades o deslindar responsabilidades
          derivadas de los servicios prestados. Si la revocación impide
          continuar con su asunto, el Despacho se lo informará para que usted
          decida lo conducente.
        </p>
      </>
    ),
  },
  {
    id: "limitacion",
    title: "Limitación de uso y divulgación",
    content: (
      <>
        <p>
          Además de los mecanismos anteriores, usted puede limitar el uso o
          divulgación de sus datos personales:
        </p>
        <ul className={LIST}>
          <li>
            Solicitando su inscripción en el listado de exclusión del
            Despacho, escribiendo a <LegalMail address={PRIVACY_EMAIL} />. Esa
            inscripción evita que sus datos se utilicen con fines informativos
            o promocionales.
          </li>
          <li>
            Inscribiéndose en el{" "}
            <B>Registro Público para Evitar Publicidad (REPEP)</B> de la
            Procuraduría Federal del Consumidor, en{" "}
            <Mono>repep.profeco.gob.mx</Mono>.
          </li>
          <li>
            Configurando su navegador para bloquear las cookies del sitio,
            según se describe en la sección 11.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "secreto-profesional",
    title: "Secreto profesional y confidencialidad",
    content: (
      <>
        <p>
          Toda la información que usted comparta con el Despacho con motivo de
          su asunto está protegida por el <B>secreto profesional</B> propio
          del ejercicio de la abogacía. Los abogados, asociados y personal del
          Despacho están obligados a guardar confidencialidad sobre dicha
          información, aun después de concluida la relación profesional.
        </p>
        <p>
          El Despacho solo revelará información de su asunto cuando usted lo
          autorice, cuando sea necesario para su defensa o representación, o
          cuando exista una obligación legal o mandato de autoridad
          competente.
        </p>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "Transferencias y comunicaciones de datos",
    content: (
      <>
        <p>
          El Despacho{" "}
          <B>
            no vende, renta ni comparte sus datos personales con fines
            comerciales
          </B>
          . Sus datos solo se comunicarán a terceros en los siguientes casos,
          todos necesarios para la atención de su asunto o derivados de una
          obligación legal:
        </p>
        <LegalTable
          head={["Destinatario", "Finalidad"]}
          rows={[
            [
              "Autoridades judiciales, administrativas, laborales o arbitrales",
              "Promover, contestar y dar seguimiento a los procedimientos en los que el Despacho lo represente.",
            ],
            [
              "Notarios y corredores públicos",
              "Formalizar actos jurídicos que usted haya encomendado.",
            ],
            [
              "Peritos, traductores y abogados corresponsales",
              "Obtener dictámenes, traducciones o atender diligencias fuera de la plaza, bajo obligación de confidencialidad.",
            ],
            [
              "Contrapartes y sus representantes",
              "Negociar o celebrar convenios, únicamente con la información que usted autorice.",
            ],
            [
              "Empresa o institución con convenio de beneficios",
              <>
                Confirmar únicamente su elegibilidad al beneficio.{" "}
                <B>No se comparte información sobre su asunto.</B>
              </>,
            ],
          ]}
        />
        <p>
          Estas comunicaciones no requieren su consentimiento cuando sean
          necesarias para el cumplimiento de la relación jurídica entre usted
          y el Despacho, para el reconocimiento, ejercicio o defensa de un
          derecho en un proceso judicial, o cuando sean exigidas por ley o por
          autoridad competente. Si en el futuro el Despacho requiriera
          realizar una transferencia distinta, este aviso se actualizará
          previamente y, cuando la Ley lo exija, se recabará su
          consentimiento.
        </p>
      </>
    ),
  },
  {
    id: "encargados",
    title: "Proveedores que tratan datos por cuenta del responsable",
    content: (
      <>
        <p>
          Para operar el sitio, los canales de atención y la administración
          interna, el Despacho utiliza servicios de terceros que tratan datos
          personales <B>por cuenta y bajo instrucciones del Despacho</B>.
          Estas remisiones no constituyen transferencias y no requieren su
          consentimiento, pero se informan por transparencia:
        </p>
        <LegalTable
          head={["Proveedor", "Servicio", "Datos que trata"]}
          rows={[
            [
              <B key="p">Meta Platforms</B>,
              "WhatsApp Business y Messenger",
              "Mensajes y número telefónico",
            ],
            [
              <B key="p">Google</B>,
              "Google Analytics y Search Console",
              "Datos de navegación de forma seudonimizada",
            ],
            [
              <B key="p">Proveedor de correo electrónico</B>,
              "Correo electrónico y almacenamiento de documentos",
              "Comunicaciones y documentos del expediente",
            ],
            [
              <B key="p">Vercel</B>,
              "Alojamiento del sitio web",
              "Registros técnicos de acceso",
            ],
            [
              <B key="p">Proveedor de facturación</B>,
              "Emisión de CFDI",
              "Datos fiscales",
            ],
          ]}
        />
        <p>
          Estos proveedores tratan los datos conforme a sus propias políticas
          de privacidad y a las condiciones contractuales que los vinculan con
          el Despacho. Algunos se encuentran fuera del territorio nacional,
          por lo que el tratamiento puede implicar el almacenamiento de datos
          en el extranjero.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies y tecnologías de rastreo",
    content: (
      <>
        <p>
          El sitio utiliza cookies y tecnologías similares que recaban
          automáticamente información sobre su navegación. Permiten reconocer
          su dispositivo entre visitas y medir el uso del sitio.
        </p>
        <LegalTable
          head={["Tecnología", "Finalidad", "Tipo"]}
          rows={[
            [
              "Google Analytics",
              "Medir el uso del sitio de forma estadística",
              "Analítica",
            ],
            [
              "Vercel Analytics",
              "Medir rendimiento y disponibilidad",
              "Técnica",
            ],
          ]}
        />
        <LegalSubheading>Cómo deshabilitarlas</LegalSubheading>
        <ul className={LIST}>
          <li>
            Desde la configuración de su navegador, bloqueando o eliminando
            las cookies (normalmente en el apartado de privacidad o datos de
            navegación).
          </li>
          <li>
            Para Google Analytics, instalando el complemento de inhabilitación
            disponible en <Mono>tools.google.com/dlpage/gaoptout</Mono>.
          </li>
        </ul>
        <p>
          Deshabilitar las cookies analíticas no impide el uso del sitio ni la
          posibilidad de contactar al Despacho.
        </p>
      </>
    ),
  },
  {
    id: "conservacion",
    title: "Plazo de conservación",
    content: (
      <>
        <p>
          El Despacho conservará sus datos personales durante el tiempo
          necesario para cumplir las finalidades descritas en este aviso y,
          posteriormente, solo durante los plazos que exija la legislación
          aplicable:
        </p>
        <ul className={LIST}>
          <li>
            <B>
              Solicitudes de información que no derivaron en la contratación
              de servicios:
            </B>{" "}
            hasta {LEAD_RETENTION} meses desde el último contacto.
          </li>
          <li>
            <B>Expedientes de asuntos atendidos:</B> durante la tramitación
            del asunto y hasta {CASE_RETENTION} años después de su conclusión,
            para atender aclaraciones, cumplimientos o responsabilidades
            profesionales.
          </li>
          <li>
            <B>Información fiscal y contable:</B> el plazo que establezca la
            legislación fiscal, actualmente de cinco años.
          </li>
          <li>
            <B>Datos de navegación:</B> catorce meses, conforme a la
            configuración de las herramientas de medición.
          </li>
        </ul>
        <p>
          Concluidos los plazos, los datos se suprimen de forma segura o se
          someten a un procedimiento de disociación que impide vincularlos con
          una persona identificada o identificable. Los documentos originales
          que usted haya entregado le serán devueltos al concluir el asunto.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Medidas de seguridad",
    content: (
      <>
        <p>
          El Despacho ha implementado medidas de seguridad administrativas,
          técnicas y físicas para proteger sus datos personales contra daño,
          pérdida, alteración, destrucción, uso, acceso o tratamiento no
          autorizados, considerando el riesgo existente, las consecuencias de
          una vulneración y la sensibilidad de los datos.
        </p>
        <p>
          Entre ellas: acceso a expedientes restringido al personal que
          atiende su asunto, convenios de confidencialidad con el personal y
          colaboradores externos, resguardo físico de expedientes bajo llave,
          cifrado en la transmisión de información a través del sitio,
          contraseñas y autenticación en los sistemas del Despacho, y
          respaldos periódicos de la información.
        </p>
        <p>
          En caso de una vulneración de seguridad que afecte de forma
          significativa sus derechos patrimoniales o morales, el Despacho se
          lo informará sin demora para que usted pueda tomar las medidas que
          considere pertinentes.
        </p>
      </>
    ),
  },
  {
    id: "cambios",
    title: "Cambios al aviso de privacidad",
    content: (
      <>
        <p>
          Este aviso de privacidad puede modificarse por cambios en la
          legislación aplicable, en las prácticas del Despacho o en los
          servicios que ofrece.
        </p>
        <p>
          Cualquier modificación se publicará en{" "}
          <B>www.azuarayasociados.mx/aviso-de-privacidad</B>, indicando la
          fecha de la última actualización al inicio del documento. Cuando el
          cambio sea sustancial —en particular si se incorporan nuevas
          finalidades que requieran su consentimiento o nuevas
          transferencias—, se le informará además por el medio de contacto que
          usted haya proporcionado.
        </p>
      </>
    ),
  },
  {
    id: "autoridad",
    title: "Autoridad",
    content: (
      <p>
        Si usted considera que su derecho a la protección de datos personales
        ha sido vulnerado por alguna conducta del Despacho, o presume alguna
        violación a las disposiciones de la Ley, puede acudir ante la{" "}
        <B>Secretaría Anticorrupción y Buen Gobierno</B>, autoridad competente
        en materia de protección de datos personales en posesión de los
        particulares.
      </p>
    ),
  },
];

export default function AvisoDePrivacidad() {
  return (
    <>
      <Navbar solid />
      <main className="bg-white pb-24 pt-32 md:pt-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Firma Legal Azuara y Asociados, S.C.
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-slate-dark md:text-5xl">
            Aviso de privacidad
          </h1>
          <div className="mt-4 h-1 w-16 bg-maroon" />
          <p className="mt-6 leading-relaxed text-gray-600">
            Tratamiento de datos personales conforme a la Ley Federal de
            Protección de Datos Personales en Posesión de los Particulares
            (DOF 20 de marzo de 2025).
          </p>
          <p className="mt-3 text-sm text-gray-500">
            <strong className="text-slate-dark">Última actualización:</strong>{" "}
            {LAST_UPDATED}
          </p>

          <LegalToc sections={SECTIONS} />

          <div className="mt-12 space-y-12">
            {SECTIONS.map((section, i) => (
              <LegalSection key={section.id} section={section} number={i + 1} />
            ))}
          </div>

          <div className="mt-14 space-y-2 border-t border-gray-200 pt-8 text-sm text-gray-500">
            <p>
              <strong className="text-slate-dark">Última actualización:</strong>{" "}
              {LAST_UPDATED}.
            </p>
            <p>
              Firma Legal Azuara y Asociados, S.C. · Bosques 131, Col.
              Arboledas de Corregidora, C.P. 67123, Guadalupe, N.L. ·
              www.azuarayasociados.mx
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
