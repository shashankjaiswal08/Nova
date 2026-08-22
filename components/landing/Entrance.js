"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Entrance = () => {
  const [showEntrance, setShowEntrance] = useState(false);
  const [mounted, setMounted] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    const hasSeenEntrance = sessionStorage.getItem("nova-entrance-shown");

    if (!hasSeenEntrance) {
      setShowEntrance(true);
      sessionStorage.setItem("nova-entrance-shown");
    }
  }, []);

  useEffect(() => {
    if (!showEntrance) return;

    // Skip cinematic animation for reduced-motion users
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setShowEntrance(false);
      }, 150);

      return () => clearTimeout(timer);
    }

    // Normal entrance duration
    const timer = setTimeout(() => {
      setShowEntrance(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [showEntrance, prefersReducedMotion]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showEntrance && (
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: prefersReducedMotion ? 0 : "-100%",
          }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.9,
            delay: prefersReducedMotion ? 0 : 1.35,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808]"
          aria-hidden="true"
        >
          {/* Subtle background glow */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 0.15,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="absolute h-[40vw] w-[40vw] rounded-full bg-violet-600 blur-[120px]"
            />
          )}

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* NOVA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="select-none text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl"
            >
              NOVA
            </motion.div>

            {/* Accent line */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: prefersReducedMotion ? "100%" : "100%",
                opacity: 1,
              }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.55,
                duration: prefersReducedMotion ? 0 : 0.65,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="mt-4 h-[1px] max-w-[180px] bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.6)] sm:max-w-[220px]"
            />

            {/* Small label */}
            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 0.5,
                y: 0,
              }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.75,
                duration: prefersReducedMotion ? 0 : 0.5,
              }}
              className="mt-4 text-[9px] uppercase tracking-[0.35em] text-white sm:text-[10px]"
            >
              Digital experiences
            </motion.p>
          </div>

          {/* Bottom progress line */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.7,
                ease: "linear",
              }}
              className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-violet-400"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Entrance;
