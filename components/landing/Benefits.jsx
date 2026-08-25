import { BarChart3, Command, Target, Zap } from "lucide-react";
export default function Benefits() {
  return (
    <section className="bg-[#e7e6e2] py-[150px] text-[#20201f] max-[800px]:py-[90px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <div className="flex items-end justify-between max-[800px]:block">
          <span className="font-mono text-[10px] tracking-[0.11em] text-[#706e68]">
            ✦ 05 / BUILT FOR FOCUS
          </span>
          <h2 className="text-right text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em] max-[800px]:mt-7 max-[800px]:text-left">
            Make room for
            <br />
            <em>meaningful work.</em>
          </h2>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr_1fr] grid-rows-[245px_245px] gap-2.5 max-[800px]:grid-cols-2 max-[800px]:grid-rows-[250px_210px_210px]">
          <article className="relative row-span-2 overflow-hidden bg-[#d1d0cb] p-[27px] max-[800px]:col-span-2 max-[800px]:row-span-1">
            <Zap />
            <h3 className="mt-[55px] text-[41px] leading-none tracking-[-0.07em] max-[800px]:mt-[30px] max-[800px]:text-[34px]">
              Less context
              <br />
              switching
            </h3>
            <p className="max-w-[215px] text-[11px] leading-[1.7] text-[#64625f]">
              Keep your team&apos;s work, communication, and decisions in one
              considered place.
            </p>
            <div className="orbit">
              <span />
              <span />
              <span />
              <i />
            </div>
          </article>
          <article className="relative overflow-hidden bg-[#d9d8d4] p-[27px] max-[800px]:p-4">
            <Target />
            <h3 className="mt-[62px] text-[25px] leading-none tracking-[-0.07em] max-[800px]:mt-[45px] max-[800px]:text-xl">
              Clearer ownership
            </h3>
            <p className="max-w-[215px] text-[11px] leading-[1.7] text-[#64625f]">
              Everyone knows what they own and why it matters.
            </p>
          </article>
          <article className="relative overflow-hidden bg-[#d9d8d4] p-[27px] max-[800px]:p-4">
            <BarChart3 />
            <h3 className="mt-[62px] text-[25px] leading-none tracking-[-0.07em] max-[800px]:mt-[45px] max-[800px]:text-xl">
              Better visibility
            </h3>
            <p className="max-w-[215px] text-[11px] leading-[1.7] text-[#64625f]">
              Progress without asking for another update.
            </p>
          </article>
          <article className="relative col-span-2 overflow-hidden bg-[#161616] p-[27px] text-[#f0efea] max-[800px]:p-4">
            <h3 className="mt-[62px] text-[25px] leading-none tracking-[-0.07em] max-[800px]:mt-[45px] max-[800px]:text-xl">
              One source
              <br />
              of truth.
            </h3>
            <p className="max-w-[215px] text-[11px] leading-[1.7] text-[#a2a09b]">
              Bring every project back to a single, trusted home.
            </p>
            <Command className="absolute bottom-[27px] right-[26px] text-[#947ef5]" />
          </article>
        </div>
      </div>
    </section>
  );
}
