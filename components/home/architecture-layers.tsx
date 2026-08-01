"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

const LAYERS = [
  {
    name: "UI/UX",
    description:
      "Начинаю с пользовательских сценариев и макета, а не с библиотеки компонентов — интерфейс подчиняется задаче, а не наоборот.",
  },
  {
    name: "Frontend",
    description:
      "Компоненты с одной ответственностью, строгая типизация, минимум состояния — только там, где оно действительно нужно.",
  },
  {
    name: "Backend / API",
    description:
      "Понятные контракты, валидация на границе системы, обработка ошибок без потери данных пользователя.",
  },
  {
    name: "Данные и инфраструктура",
    description:
      "Модель данных проектируется до кода, а не подгоняется под него; деплой и бэкапы — часть архитектуры, а не последний шаг.",
  },
] as const;

export function ArchitectureLayers() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-border py-20">
      <Container>
        <p className="text-sm font-medium tracking-widest text-muted uppercase">Как я работаю</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          От интерфейса до инфраструктуры — как единая система
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {LAYERS.map((layer, index) => (
            <button
              key={layer.name}
              type="button"
              onClick={() => setActive(index)}
              aria-expanded={active === index}
              className={cn(
                "rounded-lg border p-4 text-left transition-colors",
                active === index
                  ? "border-accent bg-accent/10"
                  : "border-border bg-surface hover:bg-surface-hover",
              )}
            >
              <span className="text-sm font-semibold">{layer.name}</span>
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-muted">{LAYERS[active].description}</p>
      </Container>
    </section>
  );
}
