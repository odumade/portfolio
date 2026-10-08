import { portfolio } from "@/data/portfolio";
import type { FocusArea } from "@/data/types";
import { BrainCircuit, Cloud, Shield, Workflow } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  llm: BrainCircuit,
  cloud: Cloud,
  mlops: Workflow,
  security: Shield,
};

export function About() {
  const about = portfolio.about;
  return (
    <section id="about" className="section-padding container-wide">
      <SectionHeading index={about.index} kicker={about.kicker} title={about.title} lede={about.lede} />
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-body md:text-lg">
            {about.paragraphs.map((parts, index) => (
              <p key={index}>
                {parts.map((part, partIndex) =>
                  part.emphasis ? (
                    <strong key={partIndex} className="font-semibold text-brand-700 dark:text-brand-300">
                      {part.text}
                    </strong>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.chips.map((chip) => (
              <li key={chip} className="chip">
                {chip}
              </li>
            ))}
          </ul>
          <Link href="/resume" className="btn btn-secondary mt-8">
            View Resume
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.focus.map((item, index) => (
            <FocusCard key={item.title} item={item} delay={index * 0.05} />
          ))}
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {about.stats.map((stat) => (
          <Reveal key={stat.label} className="surface rounded-3xl px-5 py-6 text-center">
            <p className="heading-lg text-gradient">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FocusCard({ item, delay }: { item: FocusArea; delay: number }) {
  const Icon = icons[item.icon];
  return (
    <Reveal delay={delay} className="surface surface-raise h-full rounded-3xl p-5">
      <span className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-teal-500/10 text-brand-700 dark:text-brand-300">
        <Icon size={18} aria-hidden />
      </span>
      <h3 className="font-display text-base font-bold text-heading">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
    </Reveal>
  );
}
