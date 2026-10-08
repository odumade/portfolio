"use client";

import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { SectionHeading } from "./section-heading";

export function Skills() {
  const groups = portfolio.skills;
  const total = groups.reduce((sum, group) => sum + group.skills.length, 0);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const visible = useMemo(
    () => (filter === "All" ? groups : groups.filter((group) => group.name === filter)),
    [filter, groups],
  );
  const hiddenCount = groups.slice(6).reduce((sum, group) => sum + group.skills.length, 0);
  const shown = filter === "All" && !expanded ? visible.slice(0, 6) : visible;

  return (
    <section id="skills" className="section-padding container-wide">
      <SectionHeading
        index={portfolio.skillsIntro.index}
        kicker={portfolio.skillsIntro.kicker}
        title={portfolio.skillsIntro.title}
        lede={portfolio.skillsIntro.lede}
      />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <FilterButton active={filter === "All"} onClick={() => setFilter("All")}>
          All ({total})
        </FilterButton>
        {groups.map((group) => (
          <FilterButton key={group.name} active={filter === group.name} onClick={() => setFilter(group.name)}>
            {group.name}
          </FilterButton>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        {shown.map((group) => (
          <article key={group.name} className="surface rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-heading">{group.name}</h3>
              <span className="font-mono text-xs text-muted">{group.skills.length}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {filter === "All" && hiddenCount > 0 && (
        <div className="mt-8 text-center">
          <button type="button" className="btn btn-secondary !px-5 !py-2 text-sm" onClick={() => setExpanded((value) => !value)}>
            {expanded ? "Show less" : `Show more (${hiddenCount} more)`}
          </button>
        </div>
      )}
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-gradient-to-r from-brand-700 to-accent-700 text-white"
          : "border-[var(--surface-border)] bg-[var(--surface-bg)] text-body",
      )}
    >
      {children}
    </button>
  );
}
