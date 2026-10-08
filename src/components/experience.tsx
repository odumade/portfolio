import { portfolio } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-padding container-wide">
      <SectionHeading
        index={portfolio.experienceIntro.index}
        kicker={portfolio.experienceIntro.kicker}
        title={portfolio.experienceIntro.title}
        lede={portfolio.experienceIntro.lede}
      />
      <div className="mx-auto max-w-4xl">
        <ol className="relative space-y-6 border-l border-[var(--surface-border)] pl-6 md:pl-8">
          {portfolio.experience.map((role) => (
            <li key={`${role.company}-${role.period}`} className="relative">
              <span className="absolute top-7 -left-[1.95rem] h-3.5 w-3.5 rounded-full border-2 border-brand-600 bg-canvas md:-left-[2.45rem]" />
              <Reveal className="surface rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-heading">{role.title}</h3>
                    <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{role.company}</p>
                  </div>
                  <div className="text-right">
                    {role.current && (
                      <span className="mb-1 inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                    <p className="font-mono text-xs text-muted">{role.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-body md:text-base">{role.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-body">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-600" aria-hidden>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
        {portfolio.education.length > 0 && (
          <div className="mt-16">
            <h3 className="heading-lg text-gradient mb-3">{portfolio.educationIntro.title}</h3>
            <p className="mb-6 max-w-2xl text-body">{portfolio.educationIntro.lede}</p>
            <div className="grid gap-4">
              {portfolio.education.map((item) => (
                <article key={item.school} className="surface rounded-3xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display font-bold text-heading">{item.credential}</h4>
                    <p className="font-mono text-xs text-muted">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-brand-700 dark:text-brand-300">{item.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
