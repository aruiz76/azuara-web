import type { ReactNode } from "react";

export type LegalSectionData = {
  id: string;
  title: string;
  reference?: string;
  content: ReactNode;
};

export function LegalToc({ sections }: { sections: LegalSectionData[] }) {
  return (
    <nav className="mt-10 rounded-lg border border-gray-200 bg-warm-gray p-6">
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-dark">
        Contenido
      </h2>
      <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
        {sections.map((section, i) => (
          <li key={section.id} className="flex gap-2">
            <span className="tabular-nums text-gray-400">{i + 1}.</span>
            <a
              href={`#${section.id}`}
              className="text-slate-dark transition-colors hover:text-maroon"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalSection({
  section,
  number,
}: {
  section: LegalSectionData;
  number: number;
}) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-gray-200 pt-10"
    >
      <h2 className="font-heading text-2xl font-bold text-slate-dark md:text-3xl">
        <span className="mr-2 text-gold">{number}.</span>
        {section.title}
      </h2>
      {section.reference ? (
        <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">
          {section.reference}
        </p>
      ) : null}
      <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
        {section.content}
      </div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-2 font-heading text-lg font-semibold text-slate-dark">
      {children}
    </h3>
  );
}

export function LegalTable({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead className="bg-warm-gray">
          <tr>
            {head.map((label) => (
              <th
                key={label}
                className="px-4 py-3 text-left font-heading font-semibold text-slate-dark"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-200 align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalMail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="break-all text-maroon underline underline-offset-2 hover:text-gold-dark"
    >
      {address}
    </a>
  );
}
