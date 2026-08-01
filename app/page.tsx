import { ArchitectureLayers } from "@/components/home/architecture-layers";
import { ContactCta } from "@/components/home/contact-cta";
import { Hero } from "@/components/home/hero";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { TechMarquee } from "@/components/home/tech-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ProjectShowcase />
      <ArchitectureLayers />
      <ContactCta />
    </>
  );
}
