import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-10 py-32 text-center">
      <div>
        <p className="text-sm font-medium tracking-widest text-muted uppercase">
          Design system preview
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Токены и базовые компоненты
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Эта страница — временная витрина для проверки. Hero-секция появится на следующем шаге.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      <Card interactive className="max-w-sm text-left">
        <h2 className="text-lg font-semibold">Пример карточки</h2>
        <p className="mt-2 text-sm text-muted">
          Такая карточка будет использоваться для проектов и кейсов на сайте.
        </p>
      </Card>
    </Container>
  );
}
