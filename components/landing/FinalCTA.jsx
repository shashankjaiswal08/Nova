import { ArrowUpRight } from "lucide-react";
import { Button } from "./shared";
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-0 py-40 text-center max-[800px]:py-[110px]">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(105deg,transparent_0_59px,rgba(166,145,255,0.11)_60px,transparent_61px_110px)] opacity-55" />
      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
          ✦ MAKE THE SHIFT
        </span>
        <h2 className="my-7 text-[clamp(3.1rem,6.7vw,6.5rem)] leading-[0.94] tracking-[-0.09em]">
          Ready to make
          <br />
          work feel <em>simpler?</em>
        </h2>
        <p className="text-[13px] text-[#aaa7a1]">
          Bring your projects, people and priorities into one focused workspace.
        </p>
        <div className="mt-6">
          <Button>Start Free</Button>
          <Button secondary href="#">
            Book a demo <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
