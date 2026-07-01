"use client";

import { motion } from "motion/react";

const stats = [
  {
    number: "20+",
    title: "Projects",
  },
  {
    number: "AI",
    title: "Prompt Engineering",
  },
  {
    number: "IoT",
    title: "Engineer",
  },
  {
    number: "UI",
    title: "Designer",
  },
];

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: .5,
      }}
      className="mt-24 grid gap-6 md:grid-cols-4"
    >
      {stats.map((item) => (
        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: .3,
          }}
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <h3 className="gold-shimmer text-4xl font-semibold">
            {item.number}
          </h3>

          <p className="mt-4 text-white/55">
            {item.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}