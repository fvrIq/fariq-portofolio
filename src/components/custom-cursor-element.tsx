"use client";
import { useRef, useState } from "react";
import { Cursor } from "@/components/motion-primitives/cursor";
import { AnimatePresence, motion } from "motion/react";

export function CustomCursorElement({
  children,
  cursor,
  className = "",
}: {
  children: React.ReactNode;
  cursor: React.ReactNode;
  className?: string;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <div className={className}>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
  animate={{
    width: isHovering ? 96 : 12,
    height: isHovering ? 96 : 12,
    scale: isHovering ? 1 : 0.9,
  }}
  transition={{
    type: "spring",
    stiffness: 320,
    damping: 24,
  }}
  className="
    relative
    flex
    items-center
    justify-center
    rounded-full
    border
    border-white/20
    bg-white/8
    backdrop-blur-2xl
    shadow-[0_0_35px_rgba(255,255,255,.18)]
  "
>
          <AnimatePresence mode="wait">
  {isHovering && (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.7,
      }}
      transition={{
        duration: 0.18,
      }}
      className="pointer-events-none text-[10px] font-medium uppercase tracking-[0.35em] text-white"
    >
      {cursor}
    </motion.div>
  )}
</AnimatePresence>
        </motion.div>
      </Cursor>
      <div ref={targetRef}>{children}</div>
    </div>
  );
}
