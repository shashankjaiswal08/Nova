"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed left-0 right-0 top-[62px] sm:top-[76px] z-[9998] h-[2px] bg-white/[0.04]">
      <motion.div
        className="relative h-full origin-left bg-violet-500"
        style={{
          scaleX: scrollYProgress,
        }}
      >
        {/* Purple glow */}
        <div className="absolute right-0 top-1/2 h-[6px] w-16 -translate-y-1/2 rounded-full bg-violet-500/50 blur-md" />
      </motion.div>
    </div>
  );
}

