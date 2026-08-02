import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ScreenshotLightbox } from "@/components/projects/screenshot-lightbox";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { PROJECT_TYPE_LABELS, PROJECTS } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.problem,
    openGraph: { title: project.title, description: project.problem },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="flex-1 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Все проекты
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge variant="outline">{PROJECT_TYPE_LABELS[project.type]}</Badge>
        {project.status === "in-progress" && <Badge variant="accent">В разработке</Badge>}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Проблема</h2>
            <p className="mt-3 text-foreground">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Моя роль</h2>
            <p className="mt-3 text-foreground">{project.role}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">
              Технические особенности
            </h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-foreground">
                  <span className="text-accent">—</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {project.screenshots.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">
                Скриншоты
              </h2>
              <ScreenshotLightbox screenshots={project.screenshots} />
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Стек</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Ссылки</h2>
            {project.links.github || project.links.demo ? (
              <div className="mt-3 flex flex-col gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                  >
                    {project.links.githubClient ? "Сервер на GitHub" : "Репозиторий на GitHub"}
                  </a>
                )}
                {project.links.githubClient && (
                  <a
                    href={project.links.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                  >
                    Клиент на GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                  >
                    Демо
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted">
                Проект в разработке — репозиторий и демо появятся здесь после первого релиза.
              </p>
            )}
          </div>
        </aside>
      </div>
    </Container>
  );
}
