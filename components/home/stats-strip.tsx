import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/content/projects";

function uniqueCount<T>(items: T[]): number {
  return new Set(items).size;
}

// Russian plural forms: 1 -> one, 2-4 -> few, 0/5-20 -> many (with the usual 11-14 exception).
function ruPlural(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

const projectCount = PROJECTS.length;
const stackCount = uniqueCount(PROJECTS.flatMap((p) => p.stack));
const directionCount = uniqueCount(PROJECTS.map((p) => p.type));
const demoCount = PROJECTS.filter((p) => p.links.demo).length;

const STATS = [
  { value: projectCount, label: ruPlural(projectCount, "проект", "проекта", "проектов") },
  {
    value: stackCount,
    label: `${ruPlural(stackCount, "технология", "технологии", "технологий")} в стеке`,
  },
  {
    value: directionCount,
    label: `${ruPlural(directionCount, "разное направление", "разных направления", "разных направлений")}`,
  },
  {
    value: demoCount,
    label: `${ruPlural(demoCount, "рабочее демо", "рабочих демо", "рабочих демо")} в интернете`,
  },
] as const;

export function StatsStrip() {
  return (
    <section className="border-b border-border py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
