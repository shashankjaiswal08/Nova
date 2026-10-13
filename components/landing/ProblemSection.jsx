"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { problems } from "../../data/landing";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const intro = sectionRef.current?.querySelector(".problem-intro");
      const items = sectionRef.current?.querySelectorAll(".problem-item");

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (intro) {
        gsap.fromTo(
          intro,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: intro, start: "top 75%", once: true } },
        );
      }

      if (items?.length) {
        gsap.fromTo(
          items,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: items[0], start: "top 85%", once: true } },
        );
      }
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="problems" className="py-[150px] max-[800px]:py-[90px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <div className="problem-intro grid grid-cols-[1.05fr_1fr] gap-x-[65px] max-[800px]:block">
          <span className="col-span-2 font-mono text-xs tracking-[0.11em] text-[#9b9891]">
            ✦ <span className="text-[#8d76ff]">01 / THE PROBLEM</span>
          </span>
          <h2 className="mt-10 text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em] max-[800px]:mt-7">
            Your team doesn&apos;t need
            <br />
            more <em>tools.</em>
          </h2>
          <p className="self-end text-base leading-[1.8] text-[#aaa8a2] max-[800px]:mt-5">
            Projects become complicated when work is scattered across
            messages, documents, spreadsheets and disconnected apps.
          </p>
        </div>
        <div className="mt-[82px] border-t border-[#292929] max-[800px]:mt-12">
          {problems.map((item, index) => (
            <article key={item[0]} className="problem-item grid grid-cols-[50px_1.1fr_1fr_24px] items-center gap-5 border-b border-[#292929] py-7 max-[800px]:grid-cols-[32px_1fr_20px] max-[800px]:gap-3">
              <span className="font-dm-mono text-xs text-[#96948e]">{item[0]}</span>
              <h3 className="text-[23px] tracking-[-0.06em] max-[800px]:text-lg">
                {item[1]}
              </h3>
              <p className="text-sm leading-[1.65] text-[#aaa8a2] max-[800px]:col-span-2">
                {item[2]}
              </p>
              <ArrowUpRight className="h-4 w-4 text-[#8d76ff]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
