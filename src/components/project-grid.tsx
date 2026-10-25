"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/profile";

const FILTERS = ["All", "Research", "Industry", "Personal"] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.kind === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button key={f} type="button" className="chip-button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
            <span className="chip-count">{f === "All" ? projects.length : projects.filter((p) => p.kind === f).length}</span>
          </button>
        ))}
      </div>
      <ul className="project-grid" aria-live="polite">
        {shown.map((p) => (
          <li key={p.title} className="card project">
            <div className="project-meta">
              <span className={`kind kind-${p.kind.toLowerCase()}`}>{p.org ?? p.kind}</span>
              {p.period ? <span>{p.period}</span> : null}
            </div>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            {p.highlight ? <p className="highlight">{p.highlight}</p> : null}
            <ul className="tags" aria-label="Technologies">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.links.length > 0 ? (
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <ArrowUpRight aria-hidden size={14} />
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
