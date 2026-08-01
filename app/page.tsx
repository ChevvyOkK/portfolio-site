import { ArchitectureLayers } from "@/components/home/architecture-layers";
import { ContactCta } from "@/components/home/contact-cta";
import { Hero } from "@/components/home/hero";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { TechMarquee } from "@/components/home/tech-marquee";
import { Reveal } from "@/components/motion/reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Reveal>
        <ProjectShowcase />
      </Reveal>
      <Reveal>
        <ArchitectureLayers />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
