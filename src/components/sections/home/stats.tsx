"use client";

import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Building Things That Matter.
            </h2>
          </ScrollView>

          <ScrollView delay={0.2}>
            <p>
              I'm passionate about creating technology that solves real problems.
              Whether it's AI, IoT, computer vision, or web development, I enjoy learning,
              experimenting, and turning ideas into working products.
            </p>
          </ScrollView>
        </div>

        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">5+</div>
              <p>Engineering Projects</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">4</div>
              <p>Core Expertise</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">5</div>
              <p>Leadership Experiences</p>
            </motion.div>

          </div>
        </ScrollView>
      </div>
    </section>
  );
}