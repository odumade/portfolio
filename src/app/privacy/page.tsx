import { LegalPage } from "@/components/legal-page";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: `Privacy notes for ${portfolio.name}'s portfolio.` };

export default function PrivacyPage() {
  return <LegalPage title="Privacy" paragraphs={portfolio.legal.privacy} />;
}
