"use client";

import { useEffect, useRef, useState } from "react";
// PERBAIKAN: Mengubah "motion/react" menjadi "framer-motion"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// ─── Generate Style ───────────────────────────────────────────
function generateStyle() {
  return {
    size: Math.random() * 1.8 + 0.6,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 15,
    driftX: (Math.random() - 0.5) * 40,
    riseY: -(Math.random() * 180 + 80),
    opacity: Math.random() * 0.25 + 0.06,
    colorIndex: Math.floor(Math.random() * 3),
  };
}

type ParticleStyle = ReturnType<typeof generateStyle>;

const particleColors = [
  "rgba(255, 235, 180, 0.9)",  // gold muda
  "rgba(255, 255, 255, 0.85)", // putih
  "rgba(220, 195, 140, 0.8)",  // warm cream
];

// ─── Particle ─────────────────────────────────────────────────
function Particle({ id }: { id: number }) {
  const [mounted, setMounted] = useState(false);
  const [style, setStyle] = useState<ParticleStyle | null>(null);

  useEffect(() => {
    setStyle(generateStyle());
    setMounted(true);
  }, []);

  if (!mounted || !style) return null;

  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: `${style.startX}%`,
        top: `${style.startY}%`,
        width: style.size,
        height: style.size,
        backgroundColor: particleColors[style.colorIndex],
        boxShadow: `0 0 ${style.size * 2}px ${style.size}px ${particleColors[style.colorIndex]}`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, style.opacity, style.opacity * 0.5, 0],
        x: [0, style.driftX * 0.4, style.driftX],
        y: [0, style.riseY * 0.5, style.riseY],
        scale: [0.8, 1.2, 0.6],
      }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 8 + 4,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const smoothX = useSpring(rawX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 25 });

  const glowX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth);
      rawY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  const particles = Array.from({ length: 40 }, (_, i) => i);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">

      {/* Background Photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:100%_20%] md:bg-[position:92%_center]"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      {/* ── Dark Base Overlay ── */}
      <div className="absolute inset-0 bg-black/38" />

      {/* ── Left Gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.90) 0%, rgba(0,0,0,.72) 22%, rgba(0,0,0,.28) 46%, rgba(0,0,0,.05) 100% transparent 100%)",
        }}
      />

      {/* ── Gold Cinematic Lighting ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(125deg, rgba(180,120,20,0.08) 0%, rgba(255,200,80,0.05) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* ── Gold Ambient Right (breathing) - Disembunyikan di HP agar performa lancar ── */}
      <motion.div
        className="hidden md:block absolute right-[-100px] top-[30%] h-[700px] w-[700px] rounded-full bg-amber-400/10 blur-[200px]"
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [1, 1.12, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Gold Ambient Top (breathing) - Disembunyikan di HP ── */}
      <motion.div
        className="hidden md:block absolute right-[20%] top-[-80px] h-[400px] w-[400px] rounded-full bg-amber-300/[0.08] blur-[160px]"
        animate={{
          opacity: [0.06, 0.16, 0.06],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Mouse Glow Interaction ── */}
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,200,80,0.06) 0%, rgba(255,255,255,0.03) 50%, transparent 75%)",
        }}
      />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} id={i} />
        ))}
      </div>

      {/* ── Vignette Halus ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* ── Bottom Fade ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 30%)",
        }}
      />

      {/* ── Film Grain - Disembunyikan di HP agar performa lancar ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

    </div>
  );
}