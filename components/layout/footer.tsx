import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Container } from "@/components/ui/container";

// TODO: заменить на реальный профиль GitHub перед публикацией
const GITHUB_URL = "https://github.com/yourusername";
const CONTACT_EMAIL = "loketery@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Портфолио разработчика</p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Написать на почту"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
