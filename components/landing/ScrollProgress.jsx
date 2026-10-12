"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.15 },
      });
    });
    return () => mm.revert();
  }, { scope: progressRef });

  return (
    <div className="fixed left-0 right-0 top-[76px] z-[9998] h-px bg-white/[0.04]">
      <div
        ref={progressRef}
        className="
          relative
          h-full
          origin-left
          scale-x-0
          bg-[var(--violet)]
          will-change-transform
        "
      >
        <div className="absolute right-0 top-1/2 h-1.5 w-16 -translate-y-1/2 rounded-full bg-[var(--violet)]/50 blur-md" />
      </div>
    </div>
  );
}
