import { steps } from "../../data/landing";
export default function HowItWorks() {
  return (
    <section className="py-[150px] text-center max-[800px]:py-[90px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <span className="font-mono text-[10px] tracking-[0.11em] text-[#9b9891]">
          ✦ 04 / HOW IT WORKS
        </span>
        <h2 className="my-7 text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em]">
          From idea to <em>shipped.</em>
        </h2>
        <div className="grid grid-cols-3 gap-[46px] text-left max-[800px]:grid-cols-1 max-[800px]:gap-3">
          {steps.map((item) => (
            <article key={item[0]}>
              <span className="font-mono text-xs text-[#918e87]">
                {item[0]}
              </span>
              <div className="my-5 h-px bg-[#363636]" />
              <h3 className="text-2xl tracking-[-0.065em]">{item[1]}</h3>
              <p className="max-w-[220px] text-xs leading-[1.7] text-[#908e88]">
                {item[2]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
