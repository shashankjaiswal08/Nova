export default function Testimonial() {
  return (
    <section className="py-[170px] text-center max-[800px]:py-[110px]">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <span className="rounded-full border border-[#343434] px-2 py-1.5 font-mono text-[10px]">
          DEMO TESTIMONIAL
        </span>
        <blockquote className="mx-auto my-[46px] max-w-[990px] text-[clamp(2.2rem,4.4vw,4.6rem)] leading-[1.07] tracking-[-0.08em] text-[#e8e6e1]">
          “NOVA gives our team a place to think, plan and execute without
          constantly switching tools.”
        </blockquote>
        <div className="flex items-center justify-center gap-2.5">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#d8ac86] text-[9px] font-bold text-[#403431]">
            AM
          </span>
          <p className="text-left text-[10px]">
            <b>Alex Morgan</b>
            <small>Product Lead · Demo Company</small>
          </p>
        </div>
      </div>
    </section>
  );
}
