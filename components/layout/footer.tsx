import { Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Container } from "@/components/ui/container";
import { CONTACT_EMAIL, GITHUB_URL, TELEGRAM_HANDLE, TELEGRAM_URL } from "@/lib/contact";

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
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Написать в Telegram ${TELEGRAM_HANDLE}`}
            className="transition-colors hover:text-foreground"
          >
            <Send className="h-5 w-5" />
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
