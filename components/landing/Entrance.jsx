"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const letters = "NOVA".split("");

export default function Entrance() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const alreadyShown = sessionStorage.getItem("nova-entrance-shown");

    if (alreadyShown) return;

    setVisible(true);
    sessionStorage.setItem("nova-entrance-shown", "true");

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden bg-[#050505]"
          aria-hidden="true"
        >
          {/* =========================================
              BACKGROUND
          ========================================= */}

          {/* Radial violet glow */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 0.2,
              scale: 1,
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[140px]"
          />

          {/* Secondary glow */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 0.1,
              scale: 1.2,
            }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="absolute left-[20%] top-[20%] h-[20vw] w-[20vw] rounded-full bg-indigo-500 blur-[100px]"
          />

          {/* =========================================
              GRID
          ========================================= */}

          <div className="absolute inset-0 opacity-[0.045]">
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
          </div>

          {/* =========================================
              TOP / BOTTOM LINES
          ========================================= */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.15,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute left-0 top-0 h-px w-full origin-left bg-white/20"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.25,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/10"
          />

          {/* =========================================
              SIDE LABELS
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[8px] uppercase tracking-[0.45em] text-white sm:left-10"
          >
            Creative Development
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            className="absolute right-6 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90 origin-center text-[8px] uppercase tracking-[0.45em] text-white sm:right-10"
          >
            Digital Experiences
          </motion.div>

          {/* =========================================
              CENTER
          ========================================= */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">

              {/* Small eyebrow */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                  letterSpacing: "0.15em",
                }}
                animate={{
                  opacity: 0.55,
                  y: 0,
                  letterSpacing: "0.35em",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-7 text-[8px] uppercase text-white sm:text-[9px]"
              >
                Independent Digital Studio
              </motion.div>

              {/* NOVA */}
              <div className="flex overflow-hidden">
                {letters.map((letter, index) => (
                  <motion.span
                    key={letter}
                    initial={{
                      opacity: 0,
                      y: 120,
                      rotateX: 90,
                      filter: "blur(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.35 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="select-none text-[18vw] font-semibold leading-[0.8] tracking-[-0.09em] text-white sm:text-[15vw] md:text-[12vw] lg:text-[10vw]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Accent line */}
              <div className="mt-8 flex w-full items-center gap-3">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: "100%",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.75,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="h-px bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.25,
                  }}
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,1)]"
                />

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: "35%",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.9,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="h-px bg-white/20"
                />
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 0.45,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.1,
                }}
                className="mt-5 text-[8px] uppercase tracking-[0.45em] text-white sm:text-[9px]"
              >
                Design · Development · Motion
              </motion.div>
            </div>
          </div>

          {/* =========================================
              LOADING PROGRESS
          ========================================= */}

          <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6 }}
              className="text-[8px] uppercase tracking-[0.3em] text-white"
            >
              Welcome
            </motion.span>

            <div className="flex items-center gap-3">
              <div className="h-px w-16 overflow-hidden bg-white/10 sm:w-24">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.7,
                    ease: "linear",
                  }}
                  className="h-full origin-left bg-violet-400"
                />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.8 }}
                className="text-[8px] tabular-nums tracking-[0.2em] text-white"
              >
                2026
              </motion.span>
            </div>
          </div>

          {/* =========================================
              GRAIN
          ========================================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}