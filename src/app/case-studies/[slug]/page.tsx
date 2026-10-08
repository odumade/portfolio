import { CaseStudyView } from "@/components/case-study-view";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  if (!project) return { title: "Case study" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudyView project={project} />;
}
