"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/landing";
import { Button } from "./shared";

gsap.registerPlugin(useGSAP);

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const sectionRef = useRef(null);
  const toggleRef = useRef(null);

  useGSAP(() => {
    if (!toggleRef.current) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => gsap.to(toggleRef.current, {
      x: annual ? 14 : 0,
      duration: 0.35,
      ease: "power2.out",
    }));
    return () => mm.revert();
  }, { scope: sectionRef, dependencies: [annual] });

  return (
    <section ref={sectionRef} id="pricing" className="border-y border-[#202020] bg-[#0e0e0e] py-[150px] max-[800px]:py-[90px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <div className="text-center">
          <span className="font-dm-mono text-xs tracking-[0.11em] text-[#9b9891]">✦ 06 / PRICING</span>
          <h2 className="my-[26px] text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em]">
            Start simple.
            <br />
            <em>Scale naturally.</em>
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-[#aaa8a2]">
            <span className={!annual ? "text-[#e7e5e0]" : ""}>Monthly</span>
            <button
              type="button"
              aria-label="Toggle annual billing"
              aria-pressed={annual}
              onClick={() => setAnnual(!annual)}
              className="flex h-[17px] w-[31px] items-center rounded-full border border-[#6050a7] bg-[#8d76ee] p-0.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              <i ref={toggleRef} className="block h-[11px] w-[11px] rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
            </button>
            <span className={annual ? "text-[#e7e5e0]" : ""}>
              Yearly <b className="font-dm-mono text-[11px] text-[#a998ff]">save 17%</b>
            </span>
          </div>
        </div>
        <div className="mt-[55px] grid gap-px border border-[#303030] bg-[#303030] md:grid-cols-3">
          {pricingPlans.map(([name, price, copy, list], index) => (
            <article key={name} className={`relative min-h-[395px] bg-[#111] p-8 ${index === 1 ? "bg-[#17151f]" : ""}`}>
              {index === 1 && <span className="absolute right-[18px] top-[18px] font-dm-mono text-[11px] text-[#c8bdff]">MOST POPULAR</span>}
              <h3 className="text-base tracking-[-0.05em]">{name}</h3>
              <p className="my-2.5 min-h-12 text-sm leading-[1.6] text-[#aaa8a2]">{copy}</p>
              <strong className="my-5 block text-4xl tracking-[-0.07em]">
                {index === 1 ? (annual ? "$10" : price) : price}
                {index === 1 && <small className="text-xs font-medium tracking-normal text-[#aaa8a2]"> / user / mo</small>}
              </strong>
              <div className="mb-5 [&>a]:w-full"><Button href={index === 2 ? "#contact" : "#pricing"} secondary={index !== 1}>
                {index === 2 ? "Talk to us" : "Start free"}
              </Button></div>
              <ul className="m-0 list-none border-t border-[#303030] p-[17px_0_0]">
                {list.map((item) => (
                  <li key={item} className="my-2.5 flex items-center gap-[7px] text-xs text-[#d0cec8]">
                    <Check size={14} className="text-[#8d76ef]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-[18px] text-center text-xs text-[#96948e]">Cancel anytime.</p>
      </div>
    </section>
  );
}
