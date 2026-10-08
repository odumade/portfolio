"use client";

import { portfolio } from "@/data/portfolio";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "submitting" | "success" | "demo" | "error";

const initial = { name: "", email: "", subject: "", message: "", website: "" };

export function Contact() {
  const contact = portfolio.contact;
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.subject.trim()) next.subject = "Add a subject.";
    if (form.message.trim().length < 10) next.message = "Tell me a little more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok?: boolean; mode?: string; error?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setNotice(data.error || "The message could not be sent.");
        return;
      }
      setStatus(data.mode === "demo" ? "demo" : "success");
      setNotice(
        data.mode === "demo"
          ? "Demo mode: the form is valid, and nothing was stored. Add CONTACT_WEBHOOK_URL to forward messages."
          : "Message sent. Expect a reply within a day.",
      );
      setForm(initial);
    } catch {
      setStatus("error");
      setNotice("Network error. Try again, or email directly.");
    }
  };

  const set = (key: keyof typeof initial) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  return (
    <section id="contact" className="section-padding container-wide">
      <SectionHeading index={contact.index} kicker={contact.kicker} title={contact.title} lede={contact.lede} />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="font-display text-2xl font-bold text-heading">{contact.heading}</h3>
          <p className="mt-4 leading-relaxed text-body">{contact.body}</p>
          {contact.freelance.enabled && contact.freelance.href && (
            <a
              href={contact.freelance.href}
              target="_blank"
              rel="noreferrer"
              className="surface mt-6 block rounded-3xl p-5 transition hover:border-brand-600"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-brand-700 uppercase dark:text-brand-300">
                {contact.freelance.eyebrow}
              </p>
              <p className="mt-2 font-display font-bold text-heading">{contact.freelance.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-body">{contact.freelance.body}</p>
              <p className="mt-3 text-sm font-semibold text-brand-700 dark:text-brand-300">{contact.freelance.cta}</p>
            </a>
          )}
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Email</p>
              <a href={`mailto:${portfolio.email}`} className="mt-1 inline-flex items-center gap-2 text-heading hover:text-brand-700">
                <Mail size={16} /> {portfolio.email}
              </a>
            </li>
            {portfolio.social.whatsapp && (
              <li>
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">WhatsApp</p>
                <a href={portfolio.social.whatsapp} className="mt-1 inline-flex items-center gap-2 text-heading" target="_blank" rel="noreferrer">
                  <MessageCircle size={16} /> Start a chat
                </a>
              </li>
            )}
            <li>
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Location</p>
              <p className="mt-1 inline-flex items-center gap-2 text-heading">
                <MapPin size={16} /> {portfolio.location}
              </p>
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm font-medium">
            {portfolio.social.github && (
              <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="text-body hover:text-brand-700">
                GitHub
              </a>
            )}
            {portfolio.social.linkedin && (
              <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="text-body hover:text-brand-700">
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <form onSubmit={onSubmit} className="surface flex h-full flex-col gap-4 rounded-3xl p-6 md:p-8" noValidate>
          <Field label="Name" name="name" value={form.name} onChange={set("name")} placeholder="Your name" error={errors.name} />
          <Field label="Email" name="email" type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" error={errors.email} />
          <Field label="Subject" name="subject" value={form.subject} onChange={set("subject")} placeholder="What's this about?" error={errors.subject} />
          <label className="block">
            <span className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Tell me about the role, product, or idea..."
              className="field resize-y"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="mt-1 block text-sm text-rose-600">
                {errors.message}
              </span>
            )}
          </label>
          <div className="h-0 overflow-hidden" aria-hidden>
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          <p className="text-xs leading-relaxed text-muted" role="status">
            {notice || contact.replyNote} <Link href="/privacy" className="underline">Privacy</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="field"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-sm text-rose-600">
          {error}
        </span>
      )}
    </label>
  );
}
