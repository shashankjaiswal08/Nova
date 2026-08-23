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

    const timer = setTimeout(
      () => {
        setVisible(false);
      },
      prefersReducedMotion ? 700 : 5200
    );

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: prefersReducedMotion ? 0 : "-100%",
          }}
          transition={{
            duration: prefersReducedMotion ? 0.25 : 1.1,
            delay: prefersReducedMotion ? 0 : 4.1,
          }}
          className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden bg-[#050505]"
          aria-hidden="true"
        >

          {!prefersReducedMotion && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2.5,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[650px]
                w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,rgba(124,58,237,0.08)_35%,transparent_70%)]
                blur-2xl
              "
            />
          )}

          {!prefersReducedMotion && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
              className="absolute inset-0 opacity-[0.008]"
            >
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to right,
                      rgba(255,255,255,0.2) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0.2) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "120px 120px",
                }}
              />
            </motion.div>
          )}


          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            transition={{
              duration: prefersReducedMotion ? 0.2 : 1.5,
              delay: prefersReducedMotion ? 0 : 0.5,
            }}
            className="
              absolute
              left-0
              top-1/2
              h-20
              w-[2px]
              origin-center
              -translate-y-1/2
              bg-violet-400
              shadow-[0_0_15px_rgba(167,139,250,0.7)]
              sm:h-28
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 0.4,
                  y: 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 1,
                  delay: prefersReducedMotion ? 0 : 0.7,
                }}
                className="
                  mb-6
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white
                  sm:text-[9px]
                "
              >
                Independent Digital Studio
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  scale: prefersReducedMotion ? 1 : 0.96,
                  filter: prefersReducedMotion
                    ? "blur(0px)"
                    : "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 1.8,
                  delay: prefersReducedMotion ? 0 : 0.8,
                }}
                className="
                  select-none
                  text-[18vw]
                  font-semibold
                  leading-none
                  tracking-[-0.09em]
                  text-white
                  sm:text-[15vw]
                  md:text-[12vw]
                  lg:text-[10vw]
                "
              >
                NOVA
              </motion.h1>

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 220,
                  opacity: 1,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 1.1,
                  delay: prefersReducedMotion ? 0 : 1.8,
                }}
                className="
                  mt-7
                  h-px
                  bg-violet-400
                  shadow-[0_0_16px_rgba(139,92,246,0.6)]
                "
              />


              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.4,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 1,
                  delay: prefersReducedMotion ? 0 : 2.1,
                }}
                className="
                  mt-5
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-white
                  sm:text-[9px]
                "
              >
                Design · Development · Motion
              </motion.p>
            </div>
          </div>

          {!prefersReducedMotion && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.3,
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
                className="
                  absolute
                  bottom-8
                  left-6
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white
                  sm:left-10
                "
              >
                Welcome
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.3,
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
                className="
                  absolute
                  bottom-8
                  right-6
                  text-[8px]
                  tracking-[0.2em]
                  text-white
                  sm:right-10
                "
              >
                2026
              </motion.div>
            </>
          )}


          {!prefersReducedMotion && (
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.02]
              "
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

