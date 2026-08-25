"use client";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease, reveal } from "./animations";
import Dashboard from "./ProductDashboard";
import { Button } from "./shared";
import MotionProvider from "./MotionProvider";
export default function Hero() {
  return (
    <MotionProvider>
      <section
        id="top"
        className="relative min-h-[940px] overflow-hidden px-0 pb-[100px] pt-[210px] max-[800px]:min-h-0 max-[800px]:pt-[145px] max-[800px]:pb-[55px]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_77%)]" />
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute left-1/2 top-42.5 z-0 h-115 w-[min(62vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(44,116,255,0.28)_0%,rgba(63,109,255,0.14)_35%,transparent_72%)] blur-[42px] max-[800px]:top-30 max-[800px]:h-92.5 max-[800px]:w-[130vw] max-[800px]:opacity-80"
        />
        <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
          <m.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="mx-auto max-w-[850px] text-center"
          >
            <m.div
              variants={reveal}
              className="flex items-center justify-center gap-2 text-[10px] tracking-[0.11em] text-[#bcb9b4]"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-[#9b84ff] shadow-[0_0_11px_#9b84ff]" />
              THE MODERN WORKSPACE FOR TEAMS
            </m.div>
            <m.h1
              className="my-[27px] text-[clamp(3.65rem,7.5vw,7.5rem)] font-bold leading-[0.94] tracking-[-0.09em]"
              variants={reveal}
            >
              One workspace.
              <br />
              <span>Less busywork.</span>
              <br />
              More progress.
            </m.h1>
            <m.p
              className="mx-auto max-w-[535px] text-[15px] leading-[1.7] text-[#aaa8a2]"
              variants={reveal}
            >
              Plan projects, align your team, and turn ideas into execution —
              without switching between a dozen tools.
            </m.p>
            <m.div
              variants={reveal}
              className="mt-8 flex justify-center gap-2.5 max-[800px]:mx-auto max-[800px]:max-w-[230px] max-[800px]:flex-col"
            >
              <m.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button>Start Free</Button>
              </m.div>
              <m.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button href="#product" secondary>
                  See how it works <ArrowUpRight size={16} />
                </Button>
              </m.div>
            </m.div>
            <m.div
              variants={reveal}
              className="mt-[22px] flex justify-center gap-[19px] text-base text-[#85837e]"
            >
              <span>
                <i className="h-[5px] w-[5px] rounded-full bg-[#82d3a4] shadow-[0_0_0_4px_rgba(130,211,164,0.1)]" />
                All systems operational
              </span>
              <b>No credit card required</b>
            </m.div>
          </m.div>
          <m.div
            className="hero-dashboard-outer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
          >
            <div className="mx-auto mt-[76px] max-w-[1000px] [perspective:1200px] [filter:drop-shadow(0_35px_50px_rgba(0,0,0,0.55))] max-[800px]:mt-[55px]">
              <Dashboard />
            </div>
          </m.div>
        </div>
      </section>
    </MotionProvider>
  );
}
