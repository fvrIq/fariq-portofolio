import HeroSection from "@/components/sections/home/hero-section";
import AboutSection from "@/components/sections/home/about-section";
import Stats from "@/components/sections/home/stats";
import Services from "@/components/sections/home/services";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import JourneySection from "@/components/sections/home/journey-section";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Stats />
      <Services />
      <PortfolioSection />
      <JourneySection />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}