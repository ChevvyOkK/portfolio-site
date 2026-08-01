import type { Metadata } from "next";
import { Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { CONTACT_EMAIL, GITHUB_URL, TELEGRAM_HANDLE, TELEGRAM_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Контакты",
};

const CONTACT_METHODS = [
  {
    label: "Telegram",
    value: TELEGRAM_HANDLE,
    href: TELEGRAM_URL,
    icon: Send,
    description: "Быстрее всего напишу в ответ здесь",
  },
  {
    label: "Почта",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    description: "Подходит для более официальных вопросов",
  },
  {
    label: "GitHub",
    value: "Репозитории проектов",
    href: GITHUB_URL,
    icon: GithubIcon,
    description: "Код всех проектов из этого портфолио",
  },
];

export default function ContactPage() {
  return (
    <Container className="flex-1 py-20">
      <p className="text-sm font-medium tracking-widest text-muted uppercase">Контакты</p>
      <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Как со мной связаться
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Пишите напрямую — отвечаю быстрее всего в Telegram.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {CONTACT_METHODS.map((method) => (
          <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer">
            <Card interactive className="flex h-full flex-col gap-3">
              <method.icon className="h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold">{method.label}</p>
                <p className="text-sm text-muted">{method.value}</p>
              </div>
              <p className="mt-auto text-sm text-muted">{method.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </Container>
  );
}
