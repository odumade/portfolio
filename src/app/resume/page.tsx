import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${portfolio.name}, ${portfolio.role}.`,
};

export default function ResumePage() {
  return (
    <article className="section-padding container-wide pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="kicker mb-4">Resume</p>
        <h1 className="heading-lg text-heading">{portfolio.name}</h1>
        <p className="mt-2 text-body">{portfolio.role} · {portfolio.location}</p>
        <p className="mt-1 text-sm text-muted">{portfolio.email}</p>
        <a href="/api/resume" className="btn btn-primary mt-6">Download resume</a>
        <p className="mt-8 leading-relaxed text-body">{portfolio.hero.bio}</p>
        <h2 className="font-display mt-10 text-2xl font-bold">Experience</h2>
        <div className="mt-4 space-y-6">
          {portfolio.experience.map((role) => (
            <section key={`${role.title}-${role.period}`}>
              <h3 className="font-semibold text-heading">{role.title} · {role.company}</h3>
              <p className="font-mono text-xs text-muted">{role.period}</p>
              <p className="mt-2 text-sm text-body">{role.summary}</p>
            </section>
          ))}
        </div>
        <h2 className="font-display mt-10 text-2xl font-bold">Education</h2>
        {portfolio.education.map((item) => (
          <p key={item.school} className="mt-3 text-sm text-body">
            {item.credential}, {item.school} ({item.period})
          </p>
        ))}
        <p className="mt-10 text-sm text-muted">
          This page is generated from <Link href="/" className="underline">the portfolio data</Link>. Replace the entries there and both this page and the download update.
        </p>
      </div>
    </article>
  );
}
