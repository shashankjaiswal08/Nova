"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Entrance() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const alreadyShown = sessionStorage.getItem("nova-entrance-shown");

    if (alreadyShown) {
      return;
    }

    setVisible(true);
    sessionStorage.setItem("nova-entrance-shown", "true");

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 0.8,
          delay: 1.35,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="pointer-events-none fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808]"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center">
          <motion.h1
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
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="select-none text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl"
          >
            NOVA
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              delay: 0.55,
              duration: 0.65,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="mt-4 h-px max-w-[220px] bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.6)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.5,
            }}
            className="mt-4 text-[10px] uppercase tracking-[0.35em] text-white"
          >
            Digital experiences
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

