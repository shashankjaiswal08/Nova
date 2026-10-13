"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Dashboard from "./ProductDashboard";

gsap.registerPlugin(useGSAP);

export default function ProductDemo() {
  const [tab, setTab] = useState("overview");
  const panelRef = useRef(null);

  useGSAP(
    () => {
      if (!panelRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, x: 12 },
        { autoAlpha: 1, x: 0, duration: 0.25, ease: "power2.out" },
      ));
      return () => mm.revert();
    },
    { scope: panelRef, dependencies: [tab] },
  );

  return (
    <section
      id="demo"
      className="border-y border-[#202020] bg-[#0e0e0e] py-[150px] max-[800px]:py-[90px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-full">
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.11em] text-[#9b9891]">
            ✦ 03 / IN MOTION
          </span>
          <h2 className="my-7 text-[clamp(2.8rem,5.2vw,5.3rem)] leading-[0.99] tracking-[-0.085em]">
            A workspace that
            <br />
            works <em>with you.</em>
          </h2>
          <p className="text-base text-[#aaa8a2]">
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
                className={`border-0 border-b bg-transparent pb-3.5 text-xs capitalize ${tab === item ? "border-[#9079f5] text-[#f1f0ed]" : "border-transparent text-[#aaa8a2]"}`}
                role="tab"
                aria-selected={tab === item}
              >
                {item}
              </button>
            ))}
          </div>
          <div ref={panelRef} key={tab}>
            <Dashboard mode={tab} />
          </div>
        </div>
      </div>
    </section>
  );
}
