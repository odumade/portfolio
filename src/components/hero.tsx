"use client";

import { portfolio } from "@/data/portfolio";
import { FileText, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  { label: "GitHub", href: portfolio.social.github, icon: "github" as const },
  { label: "LinkedIn", href: portfolio.social.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: "mail" as const },
  { label: portfolio.resumeLabel, href: "/resume", icon: "resume" as const },
].filter((item) => item.href);

export function Hero() {
  const roles = portfolio.roles;
  const [display, setDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const full = roles[roleIndex] ?? "";
    if (reduce) {
      setDisplay(full);
      const id = window.setInterval(() => {
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 2400);
      return () => window.clearInterval(id);
    }

    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          const next = full.slice(0, display.length + 1);
          setDisplay(next);
          if (next === full) setDeleting(true);
          return;
        }
        const next = full.slice(0, Math.max(display.length - 1, 0));
        setDisplay(next);
        if (!next) {
          setDeleting(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        }
      },
      !deleting && display === full ? 1400 : deleting ? 42 : 72,
    );

    return () => window.clearTimeout(timeout);
  }, [display, deleting, reduce, roleIndex, roles]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="ambient-glow" aria-hidden />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center">
        <div className="surface mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-500/20 px-5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
          <span className="font-mono text-base text-body sm:text-lg">{portfolio.availability}</span>
        </div>
        <h1 className="heading-xl mb-4 text-heading">
          {portfolio.hero.greeting} <span className="text-gradient">{portfolio.name}</span>
        </h1>
        <p className="mb-6 flex min-h-12 flex-wrap items-center justify-center text-2xl font-light text-body md:text-3xl" aria-live="polite">
          <span className="font-medium text-heading">{portfolio.role}</span>
          <span className="mx-2 text-brand-700 dark:text-brand-300">·</span>
          <span>{display}</span>
          <span className="blink ml-1 inline-block h-7 w-0.5 bg-brand-500" aria-hidden />
        </p>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-body md:text-xl">{portfolio.hero.bio}</p>
        <p className="mb-10 inline-flex items-center gap-1.5 font-mono text-sm text-muted">
          <MapPin size={14} className="text-brand-600" aria-hidden />
          {portfolio.location}
        </p>
        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          <Link href={portfolio.hero.primaryCta.href} className="btn btn-primary">
            {portfolio.hero.primaryCta.label}
          </Link>
          <Link href={portfolio.hero.secondaryCta.href} className="btn btn-secondary">
            {portfolio.hero.secondaryCta.label}
          </Link>
        </div>
        <div className="mb-20 flex items-center justify-center gap-6">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-brand-700 dark:hover:text-brand-300"
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <SocialIcon name={item.icon} />
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-brand-700"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase">Scroll</span>
        <span className="motion-safe:animate-bounce" aria-hidden>
          ↓
        </span>
      </a>
    </section>
  );
}

function SocialIcon({ name }: { name: "github" | "linkedin" | "mail" | "resume" }) {
  if (name === "mail") return <Mail size={18} aria-hidden />;
  if (name === "resume") return <FileText size={18} aria-hidden />;
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </svg>
  );
}
