"use client";

import type { Project } from "@/data/types";
import { portfolio } from "@/data/portfolio";
import { Check, ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductFrame } from "./product-frame";

export function CaseStudyView({ project }: { project: Project }) {
  const [shot, setShot] = useState(0);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState(portfolio.siteUrl);
  const [active, setActive] = useState(project.caseStudy[0]?.id ?? "");
  const current = project.screenshots[shot];

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  useEffect(() => {
    const nodes = project.caseStudy
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).at(-1);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [project.caseStudy]);

  const share = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="section-padding container-wide pt-32">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-heading">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/case-studies" className="hover:text-heading">Case Studies</Link></li>
          <li aria-hidden>/</li>
          <li className="text-heading">{project.title}</li>
        </ol>
      </nav>
      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">On this page</p>
          <ul className="mt-3 space-y-2">
            {project.caseStudy.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? "text-sm font-semibold text-brand-700 dark:text-brand-300" : "text-sm text-body hover:text-heading"}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="min-w-0">
          <p className="kicker mb-4">Case study</p>
          <h1 className="heading-lg text-heading">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-body">{project.tagline}</p>
          <div className="mt-8">
            <ProductFrame shot={current} />
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-sm text-muted">{current.caption}</p>
              <div className="flex gap-2">
                <button type="button" className="grid h-9 w-9 place-items-center rounded-full border border-[var(--surface-border)]" aria-label="Previous screenshot" onClick={() => setShot((value) => (value - 1 + project.screenshots.length) % project.screenshots.length)}>
                  <ChevronLeft size={16} />
                </button>
                <button type="button" className="grid h-9 w-9 place-items-center rounded-full border border-[var(--surface-border)]" aria-label="Next screenshot" onClick={() => setShot((value) => (value + 1) % project.screenshots.length)}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {project.impact.map((item) => (
              <div key={item.label} className="surface rounded-2xl p-4 text-center">
                <dt className="font-display text-2xl font-bold text-heading">{item.value}</dt>
                <dd className="mt-1 text-xs text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 max-w-3xl">
            {project.caseStudy.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display mt-10 text-2xl font-bold text-heading">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-body">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-2 text-body">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-brand-600" aria-hidden>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <h2 className="font-display mt-10 text-2xl font-bold text-heading">Technical implementation</h2>
            <p className="mt-3 leading-relaxed text-body">{project.architecture}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="chip">{tech}</li>
              ))}
            </ul>
            <h2 className="font-display mt-10 text-2xl font-bold text-heading">Key features</h2>
            <ul className="mt-4 space-y-2 text-body">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-brand-600" aria-hidden>▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary !px-4 !py-2 text-sm">GitHub</a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary !px-4 !py-2 text-sm">Live demo</a>
            )}
            <button type="button" onClick={share} className="btn btn-secondary !px-4 !py-2 text-sm">
              {copied ? <Check size={14} /> : <Link2 size={14} />}
              {copied ? "Copied" : "Copy link"}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(pageUrl || portfolio.siteUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-brand-700 dark:text-brand-300"
            >
              Share on X
            </a>
          </div>
          <div className="surface mt-10 flex items-center justify-between gap-4 rounded-3xl p-5">
            <div>
              <p className="text-xs text-muted">Written by</p>
              <p className="font-display font-bold text-heading">{portfolio.name}</p>
              <p className="text-sm text-body">{portfolio.role}</p>
            </div>
            <Link href="/#contact" className="btn btn-primary !px-4 !py-2 text-sm">Get in touch</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
