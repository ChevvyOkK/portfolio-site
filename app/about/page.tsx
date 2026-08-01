import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SKILL_CATEGORY_LABELS, SKILLS, type SkillCategory } from "@/content/skills";

export const metadata: Metadata = {
  title: "Обо мне",
};

const CATEGORY_ORDER: SkillCategory[] = ["language", "framework", "database", "tool"];

const FOCUS_POINTS = [
  "Пишу код и довожу личные проекты до рабочего состояния, а не до наброска",
  "Изучаю новые технологии и разбираюсь, как они устроены на практике",
  "Собираю портфолио из проектов на разных стеках, а не по одному шаблону",
];

export default function AboutPage() {
  return (
    <Container className="flex-1 py-20">
      <p className="text-sm font-medium tracking-widest text-muted uppercase">Обо мне</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Пишу код, разбираюсь в технологиях, довожу проекты до конца
      </h1>

      <ul className="mt-8 max-w-xl space-y-2 text-muted">
        {FOCUS_POINTS.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-accent">—</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Технологии</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {CATEGORY_ORDER.map((category) => {
            const items = SKILLS.filter((skill) => skill.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-medium text-foreground">
                  {SKILL_CATEGORY_LABELS[category]}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge key={skill.name}>{skill.name}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
