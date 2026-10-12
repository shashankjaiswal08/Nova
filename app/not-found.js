export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-8 text-[var(--text)]">
      <div className="p-8 text-center">
        <p className="mb-[18px] text-xs uppercase tracking-[0.18em] text-[#9b9891]">
          404
        </p>
        <h1 className="m-0 text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.08em]">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-[460px] text-[#aaa8a2]">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <a
          href="/"
          className="mt-[22px] inline-block rounded-lg bg-[#967cff] px-[18px] py-3 font-extrabold text-[#0c0b0d]"
        >
          Back home
        </a>
      </div>
    </main>
  );
}
