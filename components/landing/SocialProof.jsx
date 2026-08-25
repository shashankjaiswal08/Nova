export default function SocialProof() {
  return (
    <section className="border-y border-[#1e1e1e] py-14 max-[800px]:py-9">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[800px]:w-[min(100%-36px,600px)]">
        <p className="text-center font-mono text-[10px] tracking-[0.12em] text-[#777570]">
          BUILT FOR AMBITIOUS TEAMS
        </p>
        <div className="mt-8 flex items-center justify-between px-[8%] text-[#aaa9a4] max-[800px]:gap-5 max-[800px]:overflow-hidden max-[800px]:px-0">
          <b className="whitespace-nowrap text-[21px] tracking-[-0.08em] max-[800px]:text-base">
            <i className="mr-1 inline-block h-[9px] w-[9px] rounded-full bg-[#aaa9a4]" />
            Northstar
          </b>
          <b className="whitespace-nowrap text-[21px] tracking-[-0.08em] max-[800px]:text-base">
            vertex
          </b>
          <b className="whitespace-nowrap text-base max-[800px]:text-sm">
            <span>◉</span> ARC
          </b>
          <b className="whitespace-nowrap text-lg font-normal tracking-[0.02em] max-[800px]:text-sm">
            MONO<span>®</span>
          </b>
          <b className="whitespace-nowrap font-serif text-[21px] italic max-[800px]:text-base">
            form
          </b>
        </div>
      </div>
    </section>
  );
}
