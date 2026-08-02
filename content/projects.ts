import type { Perspective } from "@/lib/perspective";

export type ProjectType = "desktop" | "web-service" | "simulation" | "site";
export type ProjectStatus = "in-progress" | "done";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  pitch: Record<Perspective, string>;
  problem: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
  screenshots: { src: string; alt: string }[];
};

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  desktop: "Desktop",
  "web-service": "Веб-сервис",
  simulation: "Симуляция",
  site: "Сайт",
};

export const PROJECTS: Project[] = [
  {
    slug: "devflow-studio",
    title: "DevFlow Studio",
    type: "desktop",
    status: "in-progress",
    pitch: {
      engineer:
        "Нативный десктоп на C++/Qt6 с локальной SQLite-моделью, полнотекстовым поиском и журналом действий с undo/redo.",
      recruiter:
        "Полноценное production-grade desktop-приложение — редкость в портфолио, показывает системный язык и архитектуру данных.",
      client:
        "Персональный командный центр разработчика: задачи, заметки и код — всё в одном месте, без подписки на облако.",
    },
    problem:
      "Разработчикам нужен единый инструмент для задач, заметок и кода вместо десятка разрозненных сервисов и постоянной синхронизации с облаком.",
    role: "Архитектура приложения целиком, модель данных, UI/UX, слой автосохранения и журнала действий.",
    stack: ["C++20", "Qt 6", "SQLite", "QtCharts"],
    highlights: [
      "Транзакционный слой автосохранения поверх SQLite — данные не теряются даже при сбое",
      "Полнотекстовый поиск по заметкам и задачам через SQLite FTS5",
      "Undo/redo на уровне всего приложения, а не отдельных полей",
    ],
    links: {
      github: "https://github.com/ChevvyOkK/devflow-studio",
      demo: "https://github.com/ChevvyOkK/devflow-studio/releases/tag/v0.1.0",
    },
    screenshots: [
      {
        src: "/screenshots/devflow-studio/main-window.png",
        alt: "Главное окно: задачи, донат-диаграмма прогресса, панель поиска",
      },
    ],
  },
  {
    slug: "skillforge",
    title: "SkillForge",
    type: "web-service",
    status: "in-progress",
    pitch: {
      engineer:
        "Full-stack сервис: Next.js + NestJS + PostgreSQL, JWT-авторизация, rate limiting, деплой в реальный интернет.",
      recruiter:
        "Показывает полный цикл веб-разработки — от схемы БД и авторизации до защиты API и продакшен-деплоя.",
      client:
        "Платформа для построения персональных планов обучения с отслеживанием прогресса и публичными дорожными картами.",
    },
    problem:
      "Большие учебные цели легко бросить, если их не разбить на измеримые этапы с понятным прогрессом.",
    role: "Проектирование архитектуры, схемы БД, REST API, авторизации и деплоя целиком.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Redis"],
    highlights: [
      "Движок дорожных карт с зависимостями между этапами и автоматическим пересчётом прогресса",
      "JWT-авторизация с httpOnly-cookie и refresh-токенами",
      "Rate limiting и валидация на клиенте и сервере одной общей Zod-схемой",
    ],
    links: {
      github: "https://github.com/ChevvyOkK/skillforge",
      demo: "https://skillforge-rouge-six.vercel.app",
    },
    screenshots: [
      { src: "/screenshots/skillforge/roadmaps-list.jpg", alt: "Список дорожных карт" },
      { src: "/screenshots/skillforge/roadmap-detail.jpg", alt: "Детальная страница дорожной карты" },
      { src: "/screenshots/skillforge/public-roadmap.jpg", alt: "Публичная страница дорожной карты" },
    ],
  },
  {
    slug: "evosim",
    title: "EvoSim",
    type: "simulation",
    status: "in-progress",
    pitch: {
      engineer:
        "Симулятор искусственной жизни: ядро на Rust, скомпилированное в WebAssembly, генетический алгоритм и нейросети с нуля.",
      recruiter:
        "Технически самый сложный проект портфолио — алгоритмы, производительность и незнакомый язык, доведённые до рабочего продукта.",
      client:
        "Живая эволюция на глазах — существа с собственным «мозгом» учатся выживать в 2D-мире через естественный отбор.",
    },
    problem:
      "Хотелось показать не очередной CRUD, а настоящую алгоритмическую и производительную инженерию на теме, которую интересно разглядывать, а не только читать в коде.",
    role: "Дизайн симуляции, генетический алгоритм и нейросеть с нуля на Rust, интеграция WASM с React-интерфейсом.",
    stack: ["Rust", "WebAssembly", "React", "TypeScript", "Canvas"],
    highlights: [
      "Собственная реализация генетического алгоритма и мини-нейросети без сторонних ML-библиотек",
      "Пространственный quad-tree для зрения и коллизий тысяч агентов в реальном времени",
      "Живые графики популяции и генома отдельного существа",
    ],
    links: {
      github: "https://github.com/ChevvyOkK/evosim",
      demo: "https://evosim-chevvy-okda.vercel.app",
    },
    screenshots: [{ src: "/screenshots/evosim/simulation.jpg", alt: "Симуляция популяции существ" }],
  },
  {
    slug: "portfolio-site",
    title: "Этот сайт",
    type: "site",
    status: "in-progress",
    pitch: {
      engineer:
        "Next.js 16 + TypeScript + Tailwind CSS 4, курсор-реактивный spotlight, переключатель перспективы, деплой на Vercel.",
      recruiter:
        "Витрина остальных трёх проектов — и сам по себе пример чистой фронтенд-архитектуры и внимания к деталям.",
      client:
        "Сайт подстраивается под то, кто на него смотрит — рекрутёр, техлид или заказчик видят разные акценты.",
    },
    problem:
      "Портфолио должно не просто перечислять проекты, а за 30 секунд показать разным типам посетителей то, что важно именно им.",
    role: "Дизайн, архитектура и реализация целиком.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Курсор-реактивный spotlight на CSS custom properties без лишних ре-рендеров",
      "Переключатель перспективы меняет акценты контента, а не только цвет темы",
      "Тема без вспышки неправильного варианта при загрузке",
    ],
    links: {
      github: "https://github.com/ChevvyOkK/portfolio-site",
    },
    screenshots: [],
  },
];
