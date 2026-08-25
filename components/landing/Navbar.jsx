"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/landing";
import { ease } from "./animations";
import { Button, Logo } from "./shared";
import MotionProvider from "./MotionProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollState = useRef(false);
  useEffect(() => {
    const update = () => {
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled !== scrollState.current) {
        scrollState.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  return (
    <MotionProvider>
      <header
        className={`fixed left-0 top-0 z-20 w-full transition duration-300 ${scrolled ? "border-b border-white/[0.09] bg-[#080808]/[0.76] backdrop-blur-[16px]" : ""}`}
      >
        <nav
          className="mx-auto flex h-[76px] w-[min(1180px,calc(100%-64px))] items-center justify-between max-[800px]:h-16 max-[800px]:w-[min(100%-36px,600px)]"
          aria-label="Main navigation"
        >
          <Logo />
          <div className="ml-[90px] flex gap-8 max-[800px]:hidden">
            {navigation.map((item) => (
              <a
                className="text-base text-[#bcbab4] transition-colors hover:text-white"
                key={item}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-[22px] max-[800px]:hidden">
            <a
              className="text-base text-[#bcbab4] transition-colors hover:text-white"
              href="#"
            >
              Log in
            </a>
            <span className="[&_.inline-flex]:min-h-[38px] [&_.inline-flex]:px-3.5 [&_.inline-flex]:text-sm">
              <Button href="#pricing">Start Free</Button>
            </span>
          </div>
          <button
            className="z-30 hidden border-0 bg-transparent p-1.5 text-white max-[800px]:block"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <m.div
              className="fixed left-0 top-0 z-[1000] flex h-dvh min-h-dvh w-full flex-col justify-between overflow-y-auto overscroll-contain bg-[#0b0b0b] p-6 px-8"
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.45, ease }}
            >
              <Logo />
              <div className="flex flex-col gap-2.5">
                {navigation.map((item, index) => (
                  <a
                    className="text-[clamp(2rem,12vw,4rem)] font-bold tracking-[-0.08em]"
                    onClick={() => setOpen(false)}
                    href={`#${item.toLowerCase()}`}
                    key={item}
                  >
                    <span>0{index + 1}</span>
                    {item}
                  </a>
                ))}
              </div>
              <Button href="#pricing">Start Free</Button>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </MotionProvider>
  );
}
