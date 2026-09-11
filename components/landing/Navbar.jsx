"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "#top",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}

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
        <nav
          className="
            mx-auto
            flex
            h-[76px]
            w-full
            max-w-[1400px]
            items-center
            justify-between
            px-6
            sm:px-8
            lg:px-12
          "
        >
          {/* =========================
              LOGO
          ========================== */}

          <Link
            href="#home"
            onClick={handleNavClick}
            className="
              group
              relative
              z-[10000]
              flex
              items-center
              gap-2
              font-manrope
              text-xl
              font-semibold
              tracking-[-0.05em]
              text-white
            "
          >
            <span>NOVA</span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#8d76ff]
                shadow-[0_0_12px_rgba(141,118,255,0.8)]
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />
          </Link>

          {/* =========================
              DESKTOP NAV LINKS
          ========================== */}

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="
                  group
                  relative
                  py-2
                  font-dm-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    -bottom-0.5
                    left-0
                    h-px
                    w-0
                    bg-[#8d76ff]
                    shadow-[0_0_8px_rgba(141,118,255,0.8)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>

          {/* =========================
              DESKTOP CTA
          ========================== */}

          <Link
            href="#contact"
            onClick={handleNavClick}
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2.5
              font-dm-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-white/80
              transition-all
              duration-300
              hover:border-[#8d76ff]/40
              hover:bg-[#8d76ff]/10
              hover:text-white
              md:flex
            "
          >
            Let's talk

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              relative
              z-[10000]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white
              transition-all
              duration-300
              hover:border-[#8d76ff]/40
              hover:bg-[#8d76ff]/10
              md:hidden
            "
          >
            {menuOpen ? (
              <X
                size={18}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={18}
                strokeWidth={1.5}
              />
            )}
          </button>
        </nav>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-[9997]
              bg-[#080808]
              md:hidden
            "
          >
            {/* Purple glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(141,118,255,0.10),transparent_68%)]
              "
            />

            <div
              className="
                relative
                flex
                h-full
                flex-col
                justify-center
                px-8
                sm:px-12
              "
            >
              {/* Label */}

              <div className="mb-10">
                <span
                  className="
                    font-dm-mono
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  Navigation
                </span>
              </div>

              {/* Links */}

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.06]
                        py-5
                      "
                    >
                      <span
                        className="
                          font-manrope
                          text-4xl
                          font-medium
                          tracking-[-0.05em]
                          text-white/50
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      >
                        {link.name}
                      </span>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.3}
                        className="
                          text-white/20
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-[#8d76ff]
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-10">
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#8d76ff]
                    px-6
                    py-3
                    font-dm-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#9b86ff]
                  "
                >
                  Start a project

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>

              {/* Bottom info */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                  flex
                  items-center
                  justify-between
                  sm:left-12
                  sm:right-12
                "
              >
                <span
                  className="
                    font-dm-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Independent Digital Studio
                </span>

                <span
                  className="
                    font-dm-mono
                    text-[8px]
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

