"use client";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { problems } from "../../data/landing";
import { reveal } from "./animations";
import MotionProvider from "./MotionProvider";
export default function ProblemSection() {
  return (
    <MotionProvider>
      <section id="solutions" className="py-[150px] max-[800px]:py-[90px]">
        <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
          <m.div
            className="grid grid-cols-[1.05fr_1fr] gap-x-[65px] max-[800px]:block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="col-span-2 font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
              ✦ <span className="text-[#8d76ff]">01 / THE PROBLEM</span>
            </span>
            <h2 className="mt-10 text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em] max-[800px]:mt-7">
              Your team doesn&apos;t need
              <br />
              more <em>tools.</em>
            </h2>
            <p className="self-end text-[15px] leading-[1.8] text-[#96958f] max-[800px]:mt-5">
              Projects become complicated when work is scattered across
              messages, documents, spreadsheets and disconnected apps.
            </p>
          </m.div>
          <div className="mt-[82px] border-t border-[#292929] max-[800px]:mt-12">
            {problems.map((item, index) => (
              <m.article
                key={item[0]}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  ...reveal,
                  show: {
                    ...reveal.show,
                    transition: {
                      ...reveal.show.transition,
                      delay: index * 0.1,
                    },
                  },
                }}
              >
                <span>{item[0]}</span>
                <h3 className="text-[23px] tracking-[-0.06em] max-[800px]:text-lg">
                  {item[1]}
                </h3>
                <p className="text-xs leading-[1.65] text-[#93918d] max-[800px]:col-span-2">
                  {item[2]}
                </p>
                <ArrowUpRight />
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
