"use client";

import { useState } from "react";

import LoadingScreen from "@/components/motion-primitives/LoadingScreen";

import HeroSection from "@/components/sections/home/hero-section";
import AboutUsSection from "@/components/sections/home/about-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import StatsSection from "@/components/sections/home/stats";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <LoadingScreen
          onFinish={() => setLoading(false)}
        />
      )}

      {!loading && (
        <main className="min-h-screen">
          <HeroSection />
          <AboutUsSection />
          <ServicesSection2 />
          <PortfolioSection />
          <StatsSection />
          <Testimonials />
          <ContactSection />
          <FooterSection />
        </main>
      )}
    </>
  );
}