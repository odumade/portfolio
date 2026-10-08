import { LegalPage } from "@/components/legal-page";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: `Disclaimer for ${portfolio.name}'s portfolio.` };

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" paragraphs={portfolio.legal.disclaimer} />;
}
