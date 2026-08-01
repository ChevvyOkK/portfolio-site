import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Проекты",
};

export default function ProjectsPage() {
  return (
    <Container className="flex-1 py-20">
      <p className="text-sm font-medium tracking-widest text-muted uppercase">Проекты</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Все проекты</h1>
      <p className="mt-3 max-w-xl text-muted">
        Четыре проекта на четырёх разных стеках — от нативного десктопа до симуляции с эволюционным
        ИИ.
      </p>

      <div className="mt-10">
        <ProjectFilter projects={PROJECTS} />
      </div>
    </Container>
  );
}
