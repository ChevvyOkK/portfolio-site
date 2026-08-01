import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/content/skills";

function TechList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-3" aria-hidden={ariaHidden}>
      {SKILLS.map((skill) => (
        <Badge key={skill.name} variant="outline" className="shrink-0 whitespace-nowrap">
          {skill.name}
        </Badge>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div
      className="border-b border-border py-6"
      role="group"
      aria-label="Технологии, с которыми работаю"
    >
      <div className="group overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
          <TechList />
          <TechList ariaHidden />
        </div>
      </div>
    </div>
  );
}
