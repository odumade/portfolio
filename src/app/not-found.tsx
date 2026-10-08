import { portfolio } from "@/data/portfolio";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding container-wide pt-36 text-center">
      <p className="kicker mb-4">404</p>
      <h1 className="heading-lg text-gradient">This page is not on the site</h1>
      <p className="mx-auto mt-4 max-w-xl text-body">
        The link may be old. Head back to {portfolio.name}&apos;s portfolio or open the case studies.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/case-studies" className="btn btn-secondary">Case studies</Link>
      </div>
    </section>
  );
}
