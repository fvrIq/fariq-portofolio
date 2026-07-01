"use client";

import { motion } from "motion/react";

const journeyData = [
  {
    year: "2023",
    title: "It Started with Curiosity",
    description: "I was fascinated by how hardware and software could work together. What began as classroom learning quickly turned into late nights experimenting with microcontrollers, embedded systems, and IoT projects just to see what I could build."
  },
  {
    year: "2024",
    title: "Learning by Building",
    description: "Instead of only studying concepts, I started turning ideas into working prototypes. Projects like the Smart Door Lock and ESP32-CAM Attendance System taught me that the best lessons come from debugging, testing, failing, and trying again."
  },
  {
    year: "2025",
    title: "Exploring AI",
    description: "Curiosity led me into Artificial Intelligence. Through a Computer Vision project for detecting high-beam headlights at night, I discovered how software could interpret and understand the world beyond traditional programming."
  },
  {
    year: "2026",
    title: "Building with Purpose",
    description: "My capstone project, a Smart Brooder System for KUB chickens, represents everything I've learned so far. It's where AI, IoT, embedded systems, and telecommunication engineering come together to solve a practical problem with meaningful impact."
  }
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Header Section ── */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extralight tracking-tight text-white sm:text-5xl"
          >
            Building, Learning, <span className="font-medium text-amber-200/90">Growing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            I didn't become interested in engineering overnight. Every year brought new challenges, new skills, and a different way of thinking. This journey is still unfolding—but every project has brought me one step closer to the engineer I want to become.
          </motion.p>
        </div>

        {/* ── Timeline Section ── */}
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l border-white/10 space-y-12 sm:space-y-16 pb-8">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Glowing Dot pada garis timeline */}
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                
                {/* Tahun dan Judul */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-4">
                  <span className="text-2xl sm:text-3xl font-light text-amber-200/90">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                
                {/* Deskripsi dalam Card transparan */}
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300 bg-white/[0.03] p-5 sm:p-6 rounded-2xl border border-white/[0.05] shadow-lg backdrop-blur-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}