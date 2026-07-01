"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { motion } from "motion/react";

// HeroBackground masih kita comment dulu untuk memastikan aman
 import HeroBackground from "@/components/sections/home/HeroBackground";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.25, duration: 1.4 },
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-[100svh] w-full flex items-center">
      
      <HeroBackground />

      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-16">
        <div className="relative z-20 max-w-[640px] w-full">
          
          {/* Label */}
          <TextEffect
            preset="fade-in-blur"
            delay={0.15}
            as="p"
            className="mb-4 sm:mb-8 text-xs font-medium uppercase tracking-[0.5em] sm:tracking-[0.8em] text-zinc-500"
          >
            THIS WHERE YOU ARE
          </TextEffect>

          {/* Heading */}
          <div className="flex flex-col gap-1 sm:gap-0 tracking-[-0.05em]">
            <TextEffect
              preset="fade-in-blur"
              delay={0.4}
              as="h1"
              className="text-4xl sm:text-5xl md:text-7xl xl:text-[92px] font-extralight text-white leading-none"
            >
              Another Side of
            </TextEffect>

            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="
                text-6xl sm:text-7xl md:text-8xl xl:text-[110px] 
                font-extralight leading-none
                bg-gradient-to-r from-[#FDF6E3] via-[#D8B56A] to-[#8A5B22]
                bg-clip-text text-transparent
                drop-shadow-[0_0_20px_rgba(214,170,70,.15)]
              "
            >
              Oya
            </motion.h1>
          </div>

          {/* Description */}
          <TextEffect
            preset="fade-in-blur"
            delay={1}
            as="p"
            className="mt-6 max-w-md text-left text-sm sm:text-base leading-relaxed text-zinc-400"
          >
            Where engineering meets creativity.
          </TextEffect>

          {/* Badges */}
          <AnimatedGroup
            variants={{
              container: {
                visible: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
              },
              ...transitionVariants,
            }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3"
          >
            {[
              "Telecommunication Engineer",
              "IoT Developer",
              "Digital Enthusiast",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-zinc-300 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </AnimatedGroup>

          {/* CTA */}
          <AnimatedGroup
            variants={{
              container: {
                visible: { transition: { staggerChildren: 0.08, delayChildren: 1.8 } },
              },
              ...transitionVariants,
            }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button
              asChild
              size="lg"
              className="
                rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl text-white
                px-8 hover:bg-white/10 hover:border-amber-300/40 transition-all duration-500
                shadow-[0_0_25px_rgba(255,190,80,.08)]
              "
            >
              <Link href="#portfolio">View Projects</Link>
            </Button>

            <Button asChild variant="ghost" size="lg" className="rounded-full px-6 text-white/80 hover:text-white">
              <Link href="#contact">Let's Talk →</Link>
            </Button>
          </AnimatedGroup>

        </div>
      </div>
    </section>
  );
}