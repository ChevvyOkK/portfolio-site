import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ContactCta() {
  return (
    <section className="py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Готовы обсудить проект?
        </h2>
        <p className="max-w-md text-muted">
          Расскажите, что нужно сделать — отвечу и предложу, как это можно решить.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Написать мне
        </Link>
      </Container>
    </section>
  );
}
