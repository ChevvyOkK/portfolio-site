export type SkillCategory = "language" | "framework" | "database" | "tool";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: "Языки",
  framework: "Фреймворки и библиотеки",
  database: "Базы данных",
  tool: "Инструменты",
};

export const SKILLS: Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "C++", category: "language" },
  { name: "Rust", category: "language" },
  { name: "SQL", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "NestJS", category: "framework" },
  { name: "Qt 6", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "WebAssembly", category: "framework" },
  { name: "PostgreSQL", category: "database" },
  { name: "SQLite", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "GitHub Actions", category: "tool" },
];
