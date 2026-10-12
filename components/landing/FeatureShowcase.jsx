"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import { showcaseFeatures } from "../../data/landing";
import { Analytics, TaskBoard } from "./ProductDashboard";
import Dashboard from "./ProductDashboard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function MiniUI({ type }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#393939] bg-[#e9e9e7] p-5 shadow-[0_23px_50px_#000] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.015]">
      {type === "tasks" ? (
        <TaskBoard />
      ) : type === "analytics" ? (
        <Analytics />
      ) : (
        <Dashboard compact />
      )}
    </div>
  );
}

export default function FeatureShowcase() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll(".feature-card");
      if (!cards?.length) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: cards[0], start: "top 80%", once: true } },
      ));
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-[80px] max-[800px]:py-[90px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        {showcaseFeatures.map(([type, title, copy, bullets, category], index) => (
          <article
            key={type}
            className={`feature-card flex min-h-[580px] items-center gap-[9%] py-[70px] transition-transform duration-300 hover:-translate-y-1 max-[800px]:flex-col max-[800px]:gap-10 max-[800px]:py-[45px] ${index % 2 ? "flex-row-reverse max-[800px]:flex-col" : ""}`}
          >
            <div className="relative w-[57%] max-[800px]:w-full">
              <MiniUI type={type} />
            </div>
            <div className="w-[34%] max-[800px]:w-full">
              <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
                0{index + 1} / {category}
              </span>
              <h2
                className="my-6 text-[clamp(2.5rem,4.3vw,4.3rem)] leading-none tracking-[-0.085em]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-[13px] leading-[1.75] text-[#97958f]">{copy}</p>
              <ul className="my-6 list-none p-0">
                {bullets.map((bullet) => (
                  <li className="my-3 flex items-center gap-2 text-[11px] text-[#d0cec8]" key={bullet}>
                    <Check size={15} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a className="inline-flex items-center gap-2 border-b border-[#777] pb-1.5 text-[11px] font-bold" href="#demo">
                Explore {type}
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
