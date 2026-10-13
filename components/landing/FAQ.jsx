"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { faqs } from "../../data/landing";

gsap.registerPlugin(useGSAP);

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const answer = sectionRef.current?.querySelector(`[data-answer="${open}"]`);
    if (!answer) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => gsap.fromTo(answer, { height: 0, autoAlpha: 0 }, { height: "auto", autoAlpha: 1, duration: 0.28, ease: "power2.out" }));
    return () => mm.revert();
  }, { scope: sectionRef, dependencies: [open] });

  return (
    <section ref={sectionRef} id="resources" className="py-[150px] max-[800px]:py-[90px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[0.8fr_1.2fr] gap-[100px] max-[800px]:block max-[800px]:w-[min(100%-36px,600px)]">
        <div>
          <span className="font-mono text-xs tracking-[0.11em] text-[#9b9891]">
            ✦ 07 / FAQ
          </span>
          <h2 className="mt-7 text-[clamp(2.8rem,5.2vw,5.3rem)] leading-[0.99] tracking-[-0.085em]">
            Questions,
            <br />
            <em>answered.</em>
          </h2>
        </div>
        <div>
          {faqs.map(([question, answer], index) => (
            <article className="border-b border-[#303030]" key={question}>
              <button
                id={`faq-question-${index}`}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between border-0 bg-transparent py-[22px] text-left text-base tracking-[-0.035em]"
                onClick={() => setOpen(index === open ? -1 : index)}
                aria-expanded={open === index}
              >
                {question}
                <span className="text-xl font-light text-[#9c87f3]">
                  {open === index ? "−" : "+"}
                </span>
              </button>
              <div
                data-answer={index}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={open === index ? "overflow-hidden" : "hidden"}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[500px] pb-[22px] pr-[35px] text-sm leading-[1.75] text-[#aaa8a2]">
                    {answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
