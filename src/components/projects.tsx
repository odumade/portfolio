"use client";

import { portfolio } from "@/data/portfolio";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductFrame } from "./product-frame";
import { SectionHeading } from "./section-heading";

export function Projects() {
  const projects = portfolio.projects;
  const [index, setIndex] = useState(0);
  const [shot, setShot] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [lightbox, setLightbox] = useState(false);
  const project = projects[index];

  useEffect(() => {
    if (!autoplay) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
      setShot(0);
    }, 9000);
    return () => window.clearInterval(id);
  }, [autoplay, projects.length, index]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowRight") setShot((current) => (current + 1) % project.screenshots.length);
      if (event.key === "ArrowLeft")
        setShot((current) => (current - 1 + project.screenshots.length) % project.screenshots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project.screenshots.length]);

  const select = (next: number) => {
    setIndex(next);
    setShot(0);
  };

  return (
    <section id="projects" className="section-padding container-wide">
      <SectionHeading
        index={portfolio.projectsIntro.index}
        kicker={portfolio.projectsIntro.kicker}
        title={portfolio.projectsIntro.title}
        lede={portfolio.projectsIntro.lede}
      />
      <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start 2xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="surface min-w-0 overflow-hidden rounded-3xl p-3 pb-6 sm:p-4 sm:pb-7 xl:p-6">
          <ProjectDetail
            project={project}
            shot={shot}
            setShot={setShot}
            onExpand={() => setLightbox(true)}
          />
        </article>
        <aside className="order-first min-w-0 lg:sticky lg:top-28 lg:order-none" aria-label="All projects">
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">All projects ({projects.length})</p>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--surface-border)] px-2.5 py-1 text-xs font-medium text-body"
              aria-pressed={autoplay}
              onClick={() => setAutoplay((value) => !value)}
            >
              {autoplay ? <Pause size={12} /> : <Play size={12} />}
              Auto-Play {autoplay ? "On" : "Off"}
            </button>
          </div>
          <div className="-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2 lg:mx-0 lg:max-h-[calc(100vh-10rem)] lg:snap-none lg:flex-col lg:gap-2.5 lg:overflow-y-auto lg:overflow-x-hidden">
            {projects.map((item, itemIndex) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => select(itemIndex)}
                aria-current={itemIndex === index}
                className={cn(
                  "surface min-w-[240px] snap-start rounded-2xl px-4 py-3 text-left lg:min-w-0",
                  itemIndex === index && "border-brand-600 ring-1 ring-brand-600",
                )}
              >
                <span className="block font-display text-sm font-bold text-heading">{item.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">{item.tagline}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4" role="dialog" aria-modal="true" aria-label={project.screenshots[shot].alt}>
          <button type="button" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900" onClick={() => setLightbox(false)} aria-label="Close screenshot">
            <X size={18} />
          </button>
          <div className="w-full max-w-4xl">
            <ProductFrame shot={project.screenshots[shot]} />
            <p className="mt-3 text-center text-sm text-slate-200">{project.screenshots[shot].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectDetail({
  project,
  shot,
  setShot,
  onExpand,
}: {
  project: Project;
  shot: number;
  setShot: (value: number | ((current: number) => number)) => void;
  onExpand: () => void;
}) {
  const current = project.screenshots[shot];
  const last = project.screenshots.length;

  return (
    <>
      <div className="grid gap-6 xl:grid-cols-2 xl:items-center xl:gap-10">
        <div>
          <div className="relative">
            <ProductFrame shot={current} />
            <button type="button" className="absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900" onClick={onExpand}>
              View full screen
            </button>
            <button
              type="button"
              className="absolute top-1/2 left-3 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900"
              aria-label="Previous screenshot"
              onClick={() => setShot((value) => (value - 1 + last) % last)}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900"
              aria-label="Next screenshot"
              onClick={() => setShot((value) => (value + 1) % last)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {project.screenshots.map((item, itemIndex) => (
              <button
                key={item.alt}
                type="button"
                aria-label={`Show screenshot ${itemIndex + 1} of ${last}: ${item.alt}`}
                aria-current={itemIndex === shot}
                className={cn("h-2 rounded-full", itemIndex === shot ? "w-6 bg-brand-600" : "w-2 bg-slate-300")}
                onClick={() => setShot(itemIndex)}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted">{current.caption}</p>
          <dl className="mt-5 grid grid-cols-3 gap-3">
            {project.impact.map((item) => (
              <div key={item.label} className="text-center">
                <dt className="font-display text-xl font-bold text-heading">{item.value}</dt>
                <dd className="text-xs text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-brand-700 uppercase dark:text-brand-300">{project.eyebrow}</p>
          <h3 className="font-display mt-2 text-3xl font-bold text-heading">{project.title}</h3>
          <h4 className="mt-6 font-mono text-xs tracking-[0.16em] text-muted uppercase">The problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-body">{project.problem}</p>
          <h4 className="mt-5 font-mono text-xs tracking-[0.16em] text-muted uppercase">What I built</h4>
          <p className="mt-2 text-sm leading-relaxed text-body">{project.solution}</p>
          <h4 className="mt-5 font-mono text-xs tracking-[0.16em] text-muted uppercase">Impact</h4>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-body">
            {project.impactPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-brand-600" aria-hidden>▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-3 mt-8 flex flex-col gap-5 border-t border-[var(--surface-border)] pt-6 sm:mx-4 lg:flex-row lg:items-center lg:justify-between xl:mx-1">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-secondary !px-4 !py-2 text-sm">
              Live demo <ExternalLink size={14} />
            </a>
          )}
          <Link href={`/case-studies/${project.slug}`} className="btn btn-primary !px-4 !py-2 text-sm">
            Case study
          </Link>
        </div>
      </div>
    </>
  );
}
