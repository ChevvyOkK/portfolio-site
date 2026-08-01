import { ArchitectureLayers } from "@/components/home/architecture-layers";
import { Hero } from "@/components/home/hero";
import { TechMarquee } from "@/components/home/tech-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ArchitectureLayers />
    </>
  );
}
