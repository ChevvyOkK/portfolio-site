"use client";

import Link from "next/link";
import { usePerspective } from "@/components/perspective/perspective-provider";
import { CursorSpotlight } from "@/components/spotlight/cursor-spotlight";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/content/projects";
import { cn } from "@/lib/cn";
import type { Perspective } from "@/lib/perspective";

const HERO_COPY: Record<Perspective, { title: string; subtitle: (count: number) => string }> = {
  engineer: {
    title: "Проектирую архитектуру и пишу код, который потом не стыдно поддерживать",
    subtitle: (count) =>
      `${count} проектов на разных стеках — от нативного десктопа на C++/Qt до симуляции с эволюционным ИИ на Rust и WebAssembly.`,
  },
  recruiter: {
    title: 'Разработчик, который доводит проекты до продакшена, а не до "почти готово"',
    subtitle: (count) =>
      `Архитектура, база данных, авторизация, деплой, тесты, CI/CD — полный цикл на каждом из ${count} проектов ниже.`,
  },
  client: {
    title: "Превращаю рабочие задачи в понятные и надёжные приложения",
    subtitle: () =>
      "Технологии — инструмент решения вашей задачи, а не самоцель. Прозрачный процесс на каждом этапе, от идеи до запуска.",
  },
};

export function Hero() {
  const { perspective } = usePerspective();
  const copy = HERO_COPY[perspective];

  return (
    <CursorSpotlight className="border-b border-border">
      <Container className="flex flex-col items-center gap-6 py-28 text-center sm:py-36">
        <p className="text-sm font-medium tracking-widest text-muted uppercase">
          Портфолио разработчика
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-balance tracking-tight sm:text-6xl">
          {copy.title}
        </h1>
        <p className="max-w-xl text-lg text-muted">{copy.subtitle(PROJECTS.length)}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link href="/projects" className={buttonVariants({ size: "lg" })}>
            Смотреть проекты
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Связаться
          </Link>
        </div>
      </Container>
    </CursorSpotlight>
  );
}
