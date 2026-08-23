"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Entrance() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    setVisible(true);

    const duration = prefersReducedMotion ? 700 : 4200;

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: prefersReducedMotion ? 0 : "-100%",
          }}
          transition={{
            duration: prefersReducedMotion ? 0.25 : 1.2,
            delay: prefersReducedMotion ? 0 : 3.2,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden bg-[#050505]"
          aria-hidden="true"
        >
          {/* Background glow */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]"
            />
          )}

          {/* Grid */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 opacity-[0.035]"
            >
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px",
                }}
              />
            </motion.div>
          )}

          {/* Top line */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.6,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute left-0 top-0 h-px w-full origin-left bg-white/15"
            />
          )}

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Label */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 8,
                }}
                animate={{
                  opacity: 0.45,
                  y: 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.25 : 1,
                  delay: prefersReducedMotion ? 0 : 0.7,
                  ease: "easeOut",
                }}
                className="mb-8 text-[8px] uppercase tracking-[0.45em] text-white sm:text-[9px]"
              >
                Independent Digital Studio
              </motion.p>

              {/* NOVA */}
              <motion.h1
                initial={{
                  opacity: 0,
                  scale: prefersReducedMotion ? 1 : 0.94,
                  y: prefersReducedMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.25 : 1.5,
                  delay: prefersReducedMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="select-none text-[18vw] font-semibold leading-none tracking-[-0.09em] text-white sm:text-[15vw] md:text-[12vw] lg:text-[10vw]"
              >
                NOVA
              </motion.h1>

              {/* Accent */}
              <motion.div
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.25 : 1.2,
                  delay: prefersReducedMotion ? 0 : 1.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 h-px w-[180px] origin-center bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.65)] sm:w-[240px]"
              />

              {/* Subtitle */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 6,
                }}
                animate={{
                  opacity: 0.4,
                  y: 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.25 : 1,
                  delay: prefersReducedMotion ? 0 : 1.8,
                  ease: "easeOut",
                }}
                className="mt-5 text-[8px] uppercase tracking-[0.4em] text-white sm:text-[9px]"
              >
                Design · Development · Motion
              </motion.p>
            </div>
          </div>

          {/* Bottom progress */}
          {!prefersReducedMotion && (
            <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between sm:left-10 sm:right-10">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                Welcome
              </span>

              <div className="flex items-center gap-3">
                <div className="h-px w-20 overflow-hidden bg-white/10 sm:w-28">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 3,
                      delay: 0.4,
                      ease: "linear",
                    }}
                    className="h-full origin-left bg-violet-400"
                  />
                </div>

                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  2026
                </span>
              </div>
            </div>
          )}

          {/* Grain */}
          {!prefersReducedMotion && (
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

