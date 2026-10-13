"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Entrance() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef(null);

  useGSAP(() => {
    if (!visible || !overlayRef.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      { reduceMotion: "(prefers-reduced-motion: reduce)", normalMotion: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        if (context.conditions.reduceMotion) {
          gsap.set(overlayRef.current, { autoAlpha: 0 });
          setVisible(false);
          return;
        }
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .fromTo(
            ".entrance-label",
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.35,
          )
          .fromTo(
            ".entrance-heading",
            { opacity: 0, scale: 0.94, letterSpacing: "0.04em" },
            { opacity: 1, scale: 1, letterSpacing: "normal", duration: 1.05 },
            0.45,
          )
          .fromTo(
            ".entrance-line",
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.7 },
            1.2,
          )
          .fromTo(
            ".entrance-subtitle",
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.6 },
            1.35,
          )
          .fromTo(
            ".entrance-accent",
            { scaleY: 0, opacity: 0 },
            { scaleY: 1, opacity: 1, duration: 0.85 },
            0.2,
          )
          .to(
            overlayRef.current,
            {
              yPercent: -100,
              duration: 1.4,
              ease: "power2.inOut",
            },
            "+=0.55",
          )
          .set(overlayRef.current, { autoAlpha: 0 })
          .call(() => setVisible(false));
      },
    );
    return () => mm.revert();
  }, { scope: overlayRef, dependencies: [visible] });

  return (
    visible && (
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden bg-[#050505]"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,rgba(124,58,237,0.09)_32%,rgba(91,33,182,0.04)_50%,transparent_72%)] blur-3xl" />
        <div className="absolute left-[58%] top-[62%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="entrance-accent absolute left-0 top-1/2 h-24 w-px origin-center -translate-y-1/2 bg-[var(--violet)] opacity-0 shadow-[0_0_18px_rgba(141,118,255,0.65)] sm:h-32" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="entrance-label mb-7 font-dm-mono text-[10px] uppercase tracking-[0.35em] text-white opacity-0 sm:text-xs">
              Independent Digital Studio
            </p>
            <h1 className="entrance-heading select-none font-manrope text-[18vw] font-semibold leading-none text-white opacity-0 sm:text-[15vw] md:text-[12vw] lg:text-[10vw]">
              NOVA
            </h1>
            <div className="entrance-line mt-8 h-px w-[220px] origin-center bg-[var(--violet)] opacity-0 shadow-[0_0_16px_rgba(141,118,255,0.6)]" />
            <p className="entrance-subtitle mt-7 font-dm-mono text-[10px] uppercase tracking-[0.3em] text-white opacity-0 sm:text-xs">
              Strategy / Design / Motion / Systems
            </p>
          </div>
        </div>
      </div>
    )
  );
}
