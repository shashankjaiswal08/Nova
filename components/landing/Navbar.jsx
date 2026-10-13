"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "Product", href: "#demo" },
  { name: "Problems", href: "#problems" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      if (!menuRef.current) return;

      if (menuOpen) {
        gsap.set(menuRef.current, { display: "block" });
        gsap.fromTo(
          menuRef.current,
          { autoAlpha: 0, y: -20 },
          { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
        );
        gsap.fromTo(
          linkRefs.current,
          { x: -20, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.35, stagger: 0.05, ease: "power2.out" },
        );
      } else {
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }),
        });
      }
    },
    { scope: navbarRef, dependencies: [menuOpen] },
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={navbarRef}>
      <header
        className={`
          fixed
          left-0
          top-0
          z-[9998]
          w-full
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <nav className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="#home"
            onClick={closeMenu}
            className="group relative z-[10000] flex items-center gap-2 font-manrope text-xl font-semibold tracking-[-0.05em] text-white"
          >
            <span>NOVA</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8d76ff] shadow-[0_0_12px_rgba(141,118,255,0.8)] transition-transform duration-300 group-hover:scale-125" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group relative py-2 font-dm-mono text-xs uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#8d76ff] shadow-[0_0_8px_rgba(141,118,255,0.8)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 font-dm-mono text-xs uppercase tracking-[0.16em] text-white/80 transition-all duration-300 hover:border-[#8d76ff]/40 hover:bg-[#8d76ff]/10 hover:text-white md:flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-[#8d76ff]/40 hover:bg-[#8d76ff]/10 md:hidden"
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className="fixed inset-0 z-[9997] hidden bg-[#080808] md:hidden"
        aria-hidden={!menuOpen}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(141,118,255,0.10),transparent_68%)]" />

        <div className="relative flex h-full flex-col justify-center px-8 sm:px-12">
          <div className="mb-10">
            <span className="font-dm-mono text-[11px] uppercase tracking-[0.3em] text-white/45">Navigation</span>
          </div>

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-5"
                >
                  <span className="font-manrope text-4xl font-medium tracking-[-0.05em] text-white/50 transition-colors duration-300 group-hover:text-white">
                    {link.name}
                  </span>
                  <ArrowUpRight size={20} strokeWidth={1.3} className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8d76ff]" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-3 rounded-full bg-[#8d76ff] px-6 py-3 font-dm-mono text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9b86ff]"
            >
              Start a project
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between sm:left-12 sm:right-12">
            <span className="font-dm-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Independent Digital Studio</span>
            <span className="font-dm-mono text-[10px] tracking-[0.2em] text-white/40">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
