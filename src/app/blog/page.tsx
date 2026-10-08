import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
  description: portfolio.blogIntro.lede,
};

export default function BlogPage() {
  return (
    <section className="section-padding container-wide pt-32">
      <p className="kicker mb-4">Blog</p>
      <h1 className="heading-lg text-gradient">{portfolio.blogIntro.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-body">{portfolio.blogIntro.lede}</p>
      <div className="mt-12 grid max-w-3xl gap-5">
        {portfolio.blog.map((post) => (
          <article key={post.slug} className="surface surface-raise rounded-3xl p-6">
            <p className="font-mono text-xs text-muted">{post.date}</p>
            <h2 className="font-display mt-2 text-2xl font-bold text-heading">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand-700">{post.title}</Link>
            </h2>
            <p className="mt-3 text-body">{post.excerpt}</p>
            <ul className="mt-4 flex gap-2">
              {post.tags.map((tag) => (
                <li key={tag} className="chip">{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
