"use client";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Dashboard from "./ProductDashboard";
import MotionProvider from "./MotionProvider";
export default function ProductDemo() {
  const [tab, setTab] = useState("overview");
  return (
    <MotionProvider>
      <section
        id="demo"
        className="border-y border-[#202020] bg-[#0e0e0e] py-[150px] max-[800px]:py-[90px]"
      >
        <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-full">
          <div className="text-center">
            <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
              ✦ 03 / IN MOTION
            </span>
            <h2 className="my-7 text-[clamp(2.8rem,5.2vw,5.3rem)] leading-[0.99] tracking-[-0.085em]">
              A workspace that
              <br />
              works <em>with you.</em>
            </h2>
            <p className="text-[13px] text-[#908e88]">
              A little less admin. A lot more forward motion.
            </p>
          </div>
          <div className="mt-[62px] overflow-hidden rounded-lg border border-[#3a3a3a] bg-[#dededc] shadow-[0_24px_70px_#030303] max-[800px]:mt-10 max-[800px]:rounded-none">
            <div
              className="flex h-12 items-end gap-[27px] bg-[#151515] pl-[23px] max-[800px]:gap-[19px] max-[800px]:pl-[18px]"
              role="tablist"
              aria-label="Product views"
            >
              {["overview", "projects", "tasks", "analytics"].map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={`border-0 border-b bg-transparent pb-3.5 text-[10px] capitalize ${tab === item ? "border-[#9079f5] text-[#f1f0ed]" : "border-transparent text-[#898782]"}`}
                  role="tab"
                  aria-selected={tab === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <m.div
                key={tab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
              >
                <Dashboard mode={tab} />
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
