"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease, reveal } from "./animations";
import Dashboard from "./ProductDashboard";
import { Button } from "./shared";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[170px] z-0 h-[460px] w-[min(62vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(44,116,255,0.28)_0%,rgba(63,109,255,0.14)_35%,transparent_72%)] blur-[42px] max-[800px]:top-[120px] max-[800px]:h-[370px] max-[800px]:w-[130vw] max-[800px]:opacity-80" />
      <div className="shell hero-content relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="hero-copy"
        >
          <motion.div variants={reveal} className="eyebrow">
            <span />
            THE MODERN WORKSPACE FOR TEAMS
          </motion.div>
          <motion.h1 variants={reveal}>
            One workspace.
            <br />
            <span>Less busywork.</span>
            <br />
            More progress.
          </motion.h1>
          <motion.p variants={reveal}>
            Plan projects, align your team, and turn ideas into execution —
            without switching between a dozen tools.
          </motion.p>
          <motion.div variants={reveal} className="hero-cta">
            <Button>Start Free</Button>
            <Button href="#product" secondary>
              See how it works <ArrowUpRight size={16} />
            </Button>
          </motion.div>
          <motion.div variants={reveal} className="availability">
            <span>
              <i />
              All systems operational
            </span>
            <b>No credit card required</b>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-dashboard"
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
        >
          <Dashboard />
        </motion.div>
      </div>
    </section>
  );
}
