"use client";

import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const ids = ["about", "projects", "experience", "skills", "leadership", "certifications", "contact", "faq"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/" && active === href.slice(2);
    if (href === "/case-studies") return pathname.startsWith("/case-studies");
    if (href === "/blog") return pathname.startsWith("/blog");
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-6">
      <nav
        aria-label="Primary"
        className="surface-nav relative flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-2.5 pl-5 pr-3 sm:pl-6 lg:max-w-6xl"
      >
        <Link href="/" className="font-mono text-lg font-semibold tracking-tight text-brand-700 dark:text-brand-300" aria-label="Home">
          &lt;{portfolio.initials} /&gt;
        </Link>

        <ul className="hidden items-center gap-4 xl:flex">
          {portfolio.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium text-body transition-colors hover:text-brand-700 dark:hover:text-brand-300",
                  isActive(item.href) && "text-brand-700 underline decoration-brand-600 underline-offset-8 dark:text-brand-300",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--surface-border)] text-body"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/#contact" className="btn btn-nav">
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--surface-border)] text-heading xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="surface absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl p-3 xl:hidden">
            <ul className="flex flex-col">
              {portfolio.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-heading hover:bg-[var(--chip-bg)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="p-2 sm:hidden">
                <Link href="/#contact" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                  Let&apos;s Talk
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
