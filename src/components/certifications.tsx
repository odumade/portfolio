"use client";

import { portfolio } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const preview = 4;

export function Certifications() {
  const items = portfolio.certifications;
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, preview);
  const intro = portfolio.certificationsIntro;

  return (
    <section id="certifications" className="section-padding container-wide">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="kicker mb-4">{intro.index} / {intro.kicker}</p>
        <h2 className="heading-lg text-gradient mb-4">{intro.title}</h2>
        <p className="text-base leading-relaxed text-body md:text-lg">{intro.lede}</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-4">
        {shown.map((item) => (
          <article key={item.title} className="surface rounded-3xl p-6">
            <p className="font-mono text-xs text-muted">{item.date}</p>
            <h3 className="font-display mt-2 text-lg font-bold text-heading">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">{item.issuer}</p>
            <p className="mt-3 text-sm leading-relaxed text-body">{item.summary}</p>
            {item.href && (
              <a href={item.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
                View credential <ArrowUpRight size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
      {items.length > preview && (
        <div className="mt-8 text-center">
          <button type="button" className="btn btn-secondary !px-5 !py-2 text-sm" onClick={() => setOpen((value) => !value)}>
            {open ? "Show less" : `Show all (${items.length - preview} more)`}
          </button>
        </div>
      )}
    </section>
  );
}
