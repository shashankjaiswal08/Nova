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
      <section id="top" className="hero">
        <div className="hero-grid floating-grid" />
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute left-1/2 top-[170px] z-0 h-[460px] w-[min(62vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(44,116,255,0.28)_0%,rgba(63,109,255,0.14)_35%,transparent_72%)] blur-[42px] max-[800px]:top-[120px] max-[800px]:h-[370px] max-[800px]:w-[130vw] max-[800px]:opacity-80"
        />
        <div className="shell hero-content relative z-10">
          <m.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="hero-copy"
          >
            <m.div variants={reveal} className="eyebrow">
              <span />
              THE MODERN WORKSPACE FOR TEAMS
            </m.div>
            <m.h1 variants={reveal}>
              One workspace.
              <br />
              <span>Less busywork.</span>
              <br />
              More progress.
            </m.h1>
            <m.p variants={reveal}>
              Plan projects, align your team, and turn ideas into execution —
              without switching between a dozen tools.
            </m.p>
            <m.div variants={reveal} className="hero-cta">
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
            <m.div variants={reveal} className="availability">
              <span>
                <i />
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
            <div className="hero-dashboard">
              <Dashboard />
            </div>
          </m.div>
        </div>
      </section>
    </MotionProvider>
  );
}
