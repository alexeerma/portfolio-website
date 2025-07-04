import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { SEOHead, seoConfigs } from "@/components/seo-head";

export default function Home() {
  return (
    <>
      <SEOHead {...seoConfigs.home} />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
