import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return portfolio.blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = portfolio.blog.find((item) => item.slug === slug);
  if (!post) return { title: "Note" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = portfolio.blog.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-padding container-wide pt-32">
      <Link href="/blog" className="text-sm font-semibold text-brand-700 dark:text-brand-300">All notes</Link>
      <p className="mt-6 font-mono text-xs text-muted">{post.date}</p>
      <h1 className="heading-lg mt-3 max-w-3xl text-heading">{post.title}</h1>
      <ul className="mt-4 flex gap-2">
        {post.tags.map((tag) => (
          <li key={tag} className="chip">{tag}</li>
        ))}
      </ul>
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-body">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
