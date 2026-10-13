"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contactEmail = "er.shashankjaiswal08@gmail.com";

export default function ContactForm() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("");

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll("[data-contact-item]");
      if (!items?.length) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () =>
        gsap.fromTo(
          items,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          },
        ),
      );
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `NOVA contact from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with your message ready to send.");
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden border-y border-[#252525] bg-[#0e0e0e] py-[130px] max-[800px]:py-[90px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(141,118,255,0.12),transparent_68%)] blur-3xl"
      />
      <div className="relative mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[0.9fr_1.1fr] items-start gap-[10%] max-[800px]:w-[min(100%-36px,600px)] max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <div data-contact-item>
          <span className="font-dm-mono text-xs tracking-[0.11em] text-[#9b9891]">
            ✦ 08 / CONTACT
          </span>
          <h2 className="my-7 text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.99] tracking-[-0.085em]">
            Let’s talk
            <br />
            <em>about it.</em>
          </h2>
          <p className="max-w-[390px] text-base leading-[1.75] text-[#97958f]">
            Tell us a little about what your team needs. We’ll get back to you
            soon.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#c2b4ff] transition-colors hover:text-white"
          >
            {contactEmail}
            <ArrowUpRight size={14} />
          </a>
        </div>

        <form
          data-contact-item
          onSubmit={handleSubmit}
          className="w-full border border-[#303030] bg-[#121212] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] max-[500px]:p-5"
        >
          <label className="mb-5 block text-sm text-[#d0cec8]">
            Your name
            <input
              autoComplete="name"
              className="mt-2 block min-h-12 w-full rounded-[3px] border border-[#343434] bg-[#0c0c0c] px-3 text-sm text-[#f2f0ec] placeholder:text-[#777570] focus:border-[#8d76ff] focus:outline-none"
              name="name"
              placeholder="Alex Morgan"
              required
            />
          </label>
          <label className="mb-5 block text-sm text-[#d0cec8]">
            Work email
            <input
              autoComplete="email"
              className="mt-2 block min-h-12 w-full rounded-[3px] border border-[#343434] bg-[#0c0c0c] px-3 text-sm text-[#f2f0ec] placeholder:text-[#777570] focus:border-[#8d76ff] focus:outline-none"
              name="email"
              placeholder="alex@company.com"
              required
              type="email"
            />
          </label>
          <label className="mb-6 block text-sm text-[#d0cec8]">
            How can we help?
            <textarea
              className="mt-2 block min-h-36 w-full resize-y rounded-[3px] border border-[#343434] bg-[#0c0c0c] px-3 py-3 text-sm leading-relaxed text-[#f2f0ec] placeholder:text-[#777570] focus:border-[#8d76ff] focus:outline-none"
              name="message"
              placeholder="Tell us a little about your team and what you’re looking for..."
              required
              rows={5}
            />
          </label>
          <button
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-[#a992ff] bg-[#967cff] px-5 text-sm font-extrabold tracking-[-0.02em] text-[#0c0b0d] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-[#ad98ff]"
            type="submit"
          >
            Send a message
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <p
            aria-live="polite"
            className="mt-4 min-h-5 text-xs leading-relaxed text-[#b7aaff]"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
