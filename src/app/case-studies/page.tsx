import { ProductFrame } from "@/components/product-frame";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Selected AI engineering case studies by ${portfolio.name}.`,
};

export default function CaseStudiesPage() {
  return (
    <section className="section-padding container-wide pt-32">
      <p className="kicker mb-4">Case studies</p>
      <h1 className="heading-lg text-gradient">Selected systems, written up</h1>
      <p className="mt-4 max-w-2xl text-lg text-body">
        Each project opens into the problem, the approach, the architecture, and the result. Edit them in the portfolio data file.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article key={project.slug} className="surface surface-raise overflow-hidden rounded-3xl">
            <ProductFrame shot={project.screenshots[0]} />
            <div className="p-6">
              <h2 className="font-display text-2xl font-bold text-heading">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">{project.tagline}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <li key={tech} className="chip">{tech}</li>
                ))}
              </ul>
              <Link href={`/case-studies/${project.slug}`} className="mt-5 inline-flex text-sm font-semibold text-brand-700 dark:text-brand-300">
                Read the case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
