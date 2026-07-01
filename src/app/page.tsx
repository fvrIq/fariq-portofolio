import HeroSection from "@/components/sections/home/hero-section";
import AboutSection from "@/components/sections/home/about-section";
import ServicesSection2 from "@/components/sections/home/services-2"; // Ini komponen Expertise-mu
import Stats from "@/components/sections/home/stats";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import JourneySection from "@/components/sections/home/journey-section";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      
      {/* ── Expertise / Services Section ── */}
      <ServicesSection2 /> 
      
      <Stats />
      <PortfolioSection />
      <JourneySection />
      <Contact />
    </main>
  );
}