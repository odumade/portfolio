"use client";

import { portfolio } from "@/data/portfolio";
import { Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const assistant = portfolio.assistant;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [mode, setMode] = useState<"demo" | "live" | null>(null);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: assistant.greeting }]);
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || pending) return;
    const history = [...messages, { role: "user" as const, content }];
    setMessages(history);
    setInput("");
    setPending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.filter((message) => message.content !== assistant.greeting).slice(-8),
        }),
      });
      const data = (await response.json()) as { reply?: string; mode?: "demo" | "live"; error?: string };
      setMode(data.mode ?? null);
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply || data.error || "I could not answer that just now." },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: `The assistant is unavailable. Email ${portfolio.email} instead.` },
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label={`${assistant.name} chat`}
          className="surface fixed bottom-24 left-4 z-50 flex h-[560px] max-h-[70vh] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl shadow-2xl sm:left-6"
        >
          <div className="flex items-center gap-3 border-b border-[var(--surface-border)] px-4 py-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-accent-700 text-white">
              <Sparkles size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-heading">{assistant.name}</p>
              <p className="truncate text-xs text-muted">{assistant.subtitle}</p>
            </div>
            {mode && (
              <span className="rounded-full bg-[var(--chip-bg)] px-2 py-1 font-mono text-[10px] tracking-wide text-muted uppercase">
                {mode}
              </span>
            )}
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="text-muted">
              <X size={18} />
            </button>
          </div>
          <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <p
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl bg-gradient-to-br from-brand-700 to-accent-700 px-3 py-2 text-sm whitespace-pre-wrap text-white"
                      : "max-w-[85%] rounded-2xl border border-[var(--surface-border)] bg-[var(--chip-bg)] px-3 py-2 text-sm whitespace-pre-wrap text-body"
                  }
                >
                  {message.content}
                </p>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2">
                {assistant.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="rounded-2xl border border-[var(--surface-border)] px-3 py-2 text-left text-sm text-heading hover:border-brand-600"
                    onClick={() => send(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            {pending && <p className="text-xs text-muted">Thinking...</p>}
          </div>
          <form
            className="flex gap-2 border-t border-[var(--surface-border)] p-3"
            onSubmit={(event) => {
              event.preventDefault();
              void send(input);
            }}
          >
            <label className="sr-only" htmlFor="assistant-input">
              Message {assistant.name}
            </label>
            <input
              id="assistant-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects, skills, experience..."
              className="field"
            />
            <button type="submit" className="btn btn-primary !px-3" aria-label="Send message" disabled={pending || !input.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Chat with ${assistant.name}`}
        aria-expanded={open}
        className="fixed bottom-6 left-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-accent-700 text-white shadow-lg shadow-teal-700/30 transition hover:scale-105 sm:left-6"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </button>
    </>
  );
}
