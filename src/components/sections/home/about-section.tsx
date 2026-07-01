"use client";

import { motion } from "motion/react";

import AboutIntro from "./about/about-intro";
import AboutQuote from "./about/about-quote";
import AboutStats from "./about/about-stats";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-36"
    >
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <AboutIntro />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
          }}
          className="mx-auto mt-24 grid max-w-6xl gap-20 lg:grid-cols-[1.2fr_.8fr]"
        >
          <div className="text-xl leading-10 text-white/70">
            <p>
              <span className="font-semibold text-white">
                M. Fariq Firmansyah
              </span>
              , also known as{" "}
              <span className="gold-shimmer">
                Oya
              </span>.
            </p>

            <br />

            <p>
              A Telecommunication Engineering student
              passionate about Software Engineering,
              Artificial Intelligence,
              Embedded Systems,
              UI Design,
              and IoT.
            </p>

            <br />

            <p>
              I enjoy transforming ideas into products
              that are clean,
              functional,
              visually meaningful,
              and built to create lasting experiences.
            </p>
          </div>

          <AboutQuote />
        </motion.div>

        <AboutStats />

      </div>
    </section>
  );
}