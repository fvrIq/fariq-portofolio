"use client";

import { motion } from "motion/react";

export default function AboutIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
      }}
      className="mx-auto max-w-5xl text-center"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.7em] text-white/40">
        About Me
      </p>

      <h2 className="text-4xl font-light leading-tight md:text-6xl">
        I don't just build websites.
      </h2>

      <h2 className="gold-shimmer mt-4 text-4xl font-light leading-tight md:text-6xl">
        I craft digital experiences
        <br />
        that people remember.
      </h2>
    </motion.div>
  );
}