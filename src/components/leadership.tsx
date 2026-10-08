import { portfolio } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Leadership() {
  return (
    <section id="leadership" className="section-padding container-wide">
      <SectionHeading
        index={portfolio.leadershipIntro.index}
        kicker={portfolio.leadershipIntro.kicker}
        title={portfolio.leadershipIntro.title}
        lede={portfolio.leadershipIntro.lede}
      />
      <div className="mx-auto grid max-w-5xl gap-5">
        {portfolio.leadership.map((role) => (
          <Reveal key={role.title} className="surface rounded-3xl p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-heading">{role.title}</h3>
                <p className="text-sm text-brand-700 dark:text-brand-300">{role.organization}</p>
              </div>
              <p className="font-mono text-xs text-muted">{role.period}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-body md:text-base">{role.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-body">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-600" aria-hidden>▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
