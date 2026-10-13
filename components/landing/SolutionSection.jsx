"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, CircleDot, Layers3, MessageSquare } from "lucide-react";
import { features } from "../../data/landing";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const icons = { Layers3, CircleDot, MessageSquare, BarChart3 };

export default function SolutionSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll(".feature-card");
      if (!cards?.length) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => gsap.fromTo(
        cards,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%",
            once: true,
          },
        },
      ));
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="border-y border-[#202020] bg-[#0e0e0e] py-[150px] max-[800px]:py-[90px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <div className="flex items-end justify-between max-[800px]:block">
          <span className="font-mono text-xs tracking-[0.11em] text-[#9b9891]">
            ✦ 02 / THE SOLUTION
          </span>
          <h2 className="text-right text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em] max-[800px]:mt-7 max-[800px]:text-left">
            Everything your team needs.
            <br />
            <em>Nothing it doesn&apos;t.</em>
          </h2>
        </div>

        <div className="mt-20 grid gap-px border border-[#292929] bg-[#292929] md:grid-cols-2">
          {features.map(([name, copy, icon], index) => {
            const Icon = icons[icon];
            return (
              <article
                key={name}
                className="feature-card relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden bg-[#0e0e0e] p-[30px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#121212] max-[800px]:min-h-[220px] max-[800px]:p-[20px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[#96948e]">
                    0{index + 1}
                  </span>
                  <Icon className="h-[18px] w-[18px] shrink-0 text-[#8f78f6]" />
                </div>

                <div className="mt-[56px] flex flex-col gap-4 max-[800px]:mt-[42px]">
                  <h3 className="text-lg tracking-[-0.06em] max-[800px]:text-base">
                    {name}
                  </h3>
                  <p className="max-w-[38ch] text-sm leading-[1.7] text-[#aaa8a2]">
                    {copy}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
