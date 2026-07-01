"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 7000); // 7 detik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="fixed inset-0 z-[999999] overflow-hidden bg-black"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[220px]"
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Center */}

      <div className="relative flex h-full flex-col items-center justify-center">

        {/* Small Text */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: .45,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mb-8 text-[11px] uppercase tracking-[0.9em] text-white"
        >
          another side of
        </motion.p>

        {/* Logo */}

        <div className="backlight">

          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(20px)",
              y: 35,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            className="light-sweep"
          >
            <h1 className="gold-shimmer text-glow text-7xl font-extralight tracking-[0.55em] md:text-[9rem]">
              OYA
            </h1>
          </motion.div>

        </div>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: .35,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mt-10 text-xs uppercase tracking-[0.55em] text-white"
        >
          
        </motion.p>

        {/* Line */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 170,
            opacity: .8,
          }}
          transition={{
            delay: 1.8,
            duration: 1.6,
          }}
          className="mt-10 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />

      </div>

      {/* Bottom */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: .22,
        }}
        transition={{
          delay: 2.2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.45em] uppercase text-white"
      >
        
      </motion.div>

    </motion.div>
  );
}