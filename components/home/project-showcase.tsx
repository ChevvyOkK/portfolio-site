import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/content/projects";
import { ruPlural } from "@/lib/plural";

const directionCount = new Set(PROJECTS.map((p) => p.type)).size;

export function ProjectShowcase() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <p className="text-sm font-medium tracking-widest text-muted uppercase">Проекты</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {PROJECTS.length} проектов, {directionCount}{" "}
          {ruPlural(directionCount, "разное направление", "разных направления", "разных направлений")}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
