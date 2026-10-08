import { portfolio } from "@/data/portfolio";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const connect = [
    portfolio.social.github && { label: "GitHub", href: portfolio.social.github },
    portfolio.social.linkedin && { label: "LinkedIn", href: portfolio.social.linkedin },
    portfolio.social.whatsapp && { label: "WhatsApp", href: portfolio.social.whatsapp },
    { label: "Email", href: `mailto:${portfolio.email}` },
    portfolio.contact.freelance.enabled && portfolio.contact.freelance.href
      ? { label: "Freelance Studio", href: portfolio.contact.freelance.href }
      : null,
    { label: "Resume", href: "/resume" },
  ].filter((item): item is { label: string; href: string } => Boolean(item));

  return (
    <footer className="mt-24 border-t border-[var(--surface-border)]">
      <div className="section-padding container-wide !pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="font-mono text-lg font-semibold text-brand-700 dark:text-brand-300">
              &lt;{portfolio.initials} /&gt;
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">{portfolio.footer.blurb}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} /> {portfolio.location}
            </p>
            <p className="mt-3 text-sm text-body">{portfolio.availability}</p>
            <p className="mt-2 text-sm text-muted">{portfolio.footer.rolesLine}</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Explore" items={portfolio.footer.explore} />
            <FooterColumn title="More" items={portfolio.footer.more} />
            <FooterColumn title="Connect" items={connect} external />
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--surface-border)] pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {portfolio.name} · {portfolio.role} · All Rights Reserved.
          </p>
          <ul className="flex gap-4">
            <li><Link href="/privacy" className="hover:text-heading">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-heading">Terms</Link></li>
            <li><Link href="/disclaimer" className="hover:text-heading">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  external = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            {external && item.href.startsWith("http") ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-body hover:text-brand-700">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-sm text-body hover:text-brand-700">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
