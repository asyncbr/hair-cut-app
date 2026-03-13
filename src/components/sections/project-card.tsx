"use client";

import { useDictionary } from "@/components/providers/language-provider";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const dictionary = useDictionary();

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="h-52 bg-[linear-gradient(135deg,rgba(217,162,95,0.18),rgba(76,49,25,0.08))] p-6">
        <div className="flex h-full flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">{project.category}</span>
          <div>
            <p className="text-xl font-semibold text-[var(--color-foreground)]">{project.name}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{project.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
            {dictionary.ui.projectCard.challengeLabel}
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{project.challenge}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
            {dictionary.ui.projectCard.approachLabel}
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{project.solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
            {dictionary.ui.projectCard.outcomeLabel}
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{project.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/8 px-3 py-1 text-xs text-[var(--color-foreground)]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
