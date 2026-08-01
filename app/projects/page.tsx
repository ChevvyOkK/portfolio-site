import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Проекты — Портфолио разработчика",
};

export default function ProjectsPage() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium tracking-widest text-muted uppercase">Проекты</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Раздел в разработке
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Список проектов с фильтрами появится на следующих шагах реализации.
      </p>
    </Container>
  );
}
