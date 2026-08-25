import { BarChart3, CircleDot, Layers3, MessageSquare } from "lucide-react";
import { features } from "../../data/landing";
const icons = { Layers3, CircleDot, MessageSquare, BarChart3 };
export default function SolutionSection() {
  return (
    <section
      id="product"
      className="border-y border-[#202020] bg-[#0e0e0e] py-[150px] max-[800px]:py-[90px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <div className="flex items-end justify-between max-[800px]:block">
          <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
            ✦ 02 / THE SOLUTION
          </span>
          <h2 className="text-right text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em] max-[800px]:mt-7 max-[800px]:text-left">
            Everything your team needs.
            <br />
            <em>Nothing it doesn&apos;t.</em>
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-px border border-[#292929] bg-[#292929] max-[800px]:mt-11 max-[800px]:grid-cols-2">
          {features.map(([name, copy, icon], index) => {
            const Icon = icons[icon];
            return (
              <article
                className="relative min-h-[245px] bg-[#0e0e0e] p-[23px] max-[800px]:min-h-[185px] max-[800px]:p-4"
                key={name}
              >
                <span className="font-mono text-[10px] text-[#777570]">
                  0{index + 1}
                </span>
                <Icon className="absolute right-[21px] top-[21px] w-[18px] text-[#8f78f6]" />
                <h3 className="mt-[105px] text-lg tracking-[-0.06em] max-[800px]:mt-[73px] max-[800px]:text-base">
                  {name}
                </h3>
                <p className="text-[11px] leading-[1.6] text-[#8c8a85] max-[800px]:text-[10px]">
                  {copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
