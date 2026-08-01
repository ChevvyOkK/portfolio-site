"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/cn";
import { PROJECT_TYPE_LABELS, type Project, type ProjectType } from "@/content/projects";

const FILTERS: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "desktop", label: PROJECT_TYPE_LABELS.desktop },
  { value: "web-service", label: PROJECT_TYPE_LABELS["web-service"] },
  { value: "simulation", label: PROJECT_TYPE_LABELS.simulation },
  { value: "site", label: PROJECT_TYPE_LABELS.site },
];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div>
      <div role="group" aria-label="Фильтр по типу проекта" className="flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              filter === item.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-surface text-muted hover:bg-surface-hover",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">По этому фильтру пока ничего нет.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
