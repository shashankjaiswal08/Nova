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
    }, 3900);

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
            duration: 1.2,
            delay: 2.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden bg-[#050505]"
          aria-hidden="true"
        >
          {/* =========================
              BACKGROUND GLOW
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 0.18,
              scale: 1,
            }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[140px]"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 0.08,
              scale: 1.15,
            }}
            transition={{
              duration: 2.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="absolute left-[20%] top-[20%] h-[20vw] w-[20vw] rounded-full bg-indigo-500 blur-[110px]"
          />

          {/* =========================
              SUBTLE GRID
          ========================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.045 }}
            transition={{
              duration: 1.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="absolute inset-0"
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

          {/* =========================
              TOP LINE
          ========================= */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute left-0 top-0 h-px w-full origin-left bg-white/20"
          />

          {/* =========================
              SIDE LABELS
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 0.45, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.4,
              ease: "easeOut",
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[8px] uppercase tracking-[0.45em] text-white sm:left-10"
          >
            Creative Development
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 0.45, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeOut",
            }}
            className="absolute right-6 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90 origin-center text-[8px] uppercase tracking-[0.45em] text-white sm:right-10"
          >
            Digital Experiences
          </motion.div>

          {/* =========================
              CENTER
          ========================= */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              {/* Eyebrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                  letterSpacing: "0.15em",
                }}
                animate={{
                  opacity: 0.5,
                  y: 0,
                  letterSpacing: "0.35em",
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-8 text-[8px] uppercase text-white sm:text-[9px]"
              >
                Independent Digital Studio
              </motion.div>

              {/* =========================
                  NOVA
              ========================= */}

              <div
                className="flex overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 90,
                      rotateX: 55,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1.25,
                      delay: 0.95 + index * 0.13,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="select-none text-[18vw] font-semibold leading-[0.8] tracking-[-0.09em] text-white sm:text-[15vw] md:text-[12vw] lg:text-[10vw]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* =========================
                  ACCENT LINE
              ========================= */}

              <div className="mt-9 flex w-full items-center gap-3">
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
                    duration: 1.15,
                    delay: 1.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px w-full origin-left bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.7)]"
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
                    duration: 0.7,
                    delay: 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,1)]"
                />

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
                    duration: 1,
                    delay: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px w-[35%] origin-left bg-white/20"
                />
              </div>

              {/* Subtitle */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 0.4,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 text-[8px] uppercase tracking-[0.45em] text-white sm:text-[9px]"
              >
                Design · Development · Motion
              </motion.div>
            </div>
          </div>

          {/* =========================
              BOTTOM PROGRESS
          ========================= */}

          <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
              }}
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
                    duration: 2.8,
                    delay: 0.7,
                    ease: "linear",
                  }}
                  className="h-full origin-left bg-violet-400"
                />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                }}
                className="text-[8px] tabular-nums tracking-[0.2em] text-white"
              >
                2026
              </motion.span>
            </div>
          </div>

          {/* =========================
              GRAIN
          ========================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
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

