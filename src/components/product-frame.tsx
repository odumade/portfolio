import type { Screenshot } from "@/data/types";

function TopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
      <span className="ml-2 truncate font-mono text-[11px] text-slate-300">{title}</span>
    </div>
  );
}

export function ProductFrame({ shot }: { shot: Screenshot }) {
  return (
    <div className="flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl bg-slate-950 text-slate-100 shadow-inner">
      <TopBar title={shot.title} />
      <div className="relative flex-1 p-4">
        {shot.kind === "chat" && <ChatMock />}
        {shot.kind === "dashboard" && <DashboardMock />}
        {shot.kind === "board" && <BoardMock />}
        {shot.kind === "vision" && <VisionMock />}
        {shot.kind === "pipeline" && <PipelineMock />}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="space-y-3">
      <div className="max-w-[80%] rounded-2xl bg-white/10 px-3 py-2 text-xs text-slate-200">
        Which policy covers the refund window?
      </div>
      <div className="ml-auto max-w-[88%] rounded-2xl bg-gradient-to-br from-teal-700 to-cyan-800 px-3 py-2 text-xs leading-relaxed">
        Refunds are accepted within 14 days. The source is the billing policy, page 3.
      </div>
      <div className="ml-auto flex gap-2">
        <span className="rounded-full bg-teal-400/15 px-2 py-1 font-mono text-[10px] text-teal-200">
          p.3 · lines 40–48
        </span>
        <span className="rounded-full bg-white/10 px-2 py-1 font-mono text-[10px] text-slate-300">
          route · documents
        </span>
      </div>
    </div>
  );
}

function DashboardMock() {
  const bars = [42, 68, 55, 80, 62, 90, 74];
  return (
    <div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {["MAE 0.18", "Drift ok", "Daily"].map((item) => (
          <div key={item} className="rounded-xl bg-white/10 px-2 py-2 text-center font-mono text-[10px] text-teal-100">
            {item}
          </div>
        ))}
      </div>
      <div className="flex h-28 items-end gap-2 rounded-xl bg-white/5 px-3 py-3">
        {bars.map((height) => (
          <div
            key={height}
            className="flex-1 rounded-t bg-gradient-to-t from-teal-700 to-cyan-300"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function BoardMock() {
  const cells = ["0.91", "0.74", "0.62", "0.88", "0.41", "0.79", "0.95", "0.66", "0.83"];
  return (
    <div>
      <div className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-slate-400">
        <span>Grounding</span>
        <span>Refusal</span>
        <span>Format</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {cells.map((cell, index) => (
          <div
            key={`${cell}-${index}`}
            className="rounded-lg border border-white/10 bg-white/5 py-3 text-center font-mono text-sm text-teal-100"
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionMock() {
  return (
    <div className="relative h-44 overflow-hidden rounded-xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-900/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-28 w-[140%] -translate-x-1/2 bg-slate-900 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
        <path d="M70 108 C90 70, 100 48, 100 36" fill="none" stroke="#5eead4" strokeWidth="3" />
        <path d="M130 108 C110 70, 100 48, 100 36" fill="none" stroke="#22d3ee" strokeWidth="3" />
        <rect x="78" y="58" width="44" height="22" rx="4" fill="none" stroke="#f8fafc" strokeOpacity="0.8" />
      </svg>
    </div>
  );
}

function PipelineMock() {
  const steps = ["Route", "Retrieve", "Write", "Check"];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-500/20 font-mono text-xs text-teal-200">
            {index + 1}
          </div>
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">{step}</div>
        </div>
      ))}
    </div>
  );
}
