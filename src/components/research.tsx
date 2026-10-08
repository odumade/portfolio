import { portfolio } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Research() {
  if (portfolio.research.length === 0) return null;

  return (
    <section id="research" className="section-padding container-wide">
      <SectionHeading
        index={portfolio.researchIntro.index}
        kicker={portfolio.researchIntro.kicker}
        title={portfolio.researchIntro.title}
        lede={portfolio.researchIntro.lede}
      />
      <div className="mx-auto grid max-w-5xl gap-5">
        {portfolio.research.map((paper) => (
          <Reveal key={paper.title} className="surface surface-raise rounded-3xl p-6 md:p-8">
            <p className="font-mono text-xs text-muted">{paper.date}</p>
            <h3 className="font-display mt-2 text-xl font-bold text-heading">{paper.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body md:text-base">{paper.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="chip">{paper.tag}</span>
              {paper.href && (
                <a href={paper.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
                  View paper <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
