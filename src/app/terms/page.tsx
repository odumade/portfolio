import { LegalPage } from "@/components/legal-page";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: `Terms for ${portfolio.name}'s portfolio.` };

export default function TermsPage() {
  return <LegalPage title="Terms" paragraphs={portfolio.legal.terms} />;
}
