"use client";

import { motion } from "motion/react";

export default function AboutQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: .2,
        duration: .8,
      }}
      className="relative"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

      <blockquote className="pl-8 text-xl italic leading-10 text-white/80">
        I believe great products are never an accident.
        <br />
        <br />
        They're the result of curiosity,
        countless iterations,
        and an obsession with turning ideas
        into experiences people genuinely enjoy.
      </blockquote>
    </motion.div>
  );
}