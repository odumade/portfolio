"use client";

import { portfolio } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding container-wide">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="heading-lg text-gradient mb-4">{portfolio.faqIntro.title}</h2>
        <p className="text-body md:text-lg">{portfolio.faqIntro.lede}</p>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-[var(--surface-border)] overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--surface-bg)]">
        {portfolio.faq.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base text-heading"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {item.question}
                  <ChevronDown size={18} className={expanded ? "rotate-180 text-brand-600 transition" : "text-muted transition"} />
                </button>
              </h3>
              {expanded && <p className="px-5 pb-5 text-sm leading-relaxed text-body">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
