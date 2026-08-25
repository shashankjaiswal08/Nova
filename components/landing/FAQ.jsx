"use client";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { faqs } from "../../data/landing";
import { ease } from "./animations";
import MotionProvider from "./MotionProvider";
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <MotionProvider>
      <section id="resources" className="py-[150px] max-[800px]:py-[90px]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[0.8fr_1.2fr] gap-[100px] max-[800px]:block max-[800px]:w-[min(100%-36px,600px)]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
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
                  className="flex w-full items-center justify-between border-0 bg-transparent py-[22px] text-left text-[15px] tracking-[-0.035em]"
                  onClick={() => setOpen(index === open ? -1 : index)}
                  aria-expanded={open === index}
                >
                  {question}
                  <span className="text-xl font-light text-[#9c87f3]">
                    {open === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease }}
                    >
                      <p className="max-w-[500px] pb-[22px] pr-[35px] text-xs leading-[1.75] text-[#97948f]">
                        {answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
