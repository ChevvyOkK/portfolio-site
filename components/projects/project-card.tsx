"use client";

import Link from "next/link";
import { usePerspective } from "@/components/perspective/perspective-provider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PROJECT_TYPE_LABELS, type Project } from "@/content/projects";

const STACK_PREVIEW_LIMIT = 4;

export function ProjectCard({ project }: { project: Project }) {
  const { perspective } = usePerspective();
  const extraStackCount = project.stack.length - STACK_PREVIEW_LIMIT;

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card interactive className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{PROJECT_TYPE_LABELS[project.type]}</Badge>
          {project.status === "in-progress" && <Badge variant="accent">В разработке</Badge>}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.pitch[perspective]}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, STACK_PREVIEW_LIMIT).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {extraStackCount > 0 && <Badge>+{extraStackCount}</Badge>}
        </div>
      </Card>
    </Link>
  );
}
