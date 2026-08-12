"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/landing";
import { ease } from "./animations";
import { Button, Logo } from "./shared";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    addEventListener("scroll", update);
    return () => removeEventListener("scroll", update);
  }, []);
  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Logo />
        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="login" href="#">
            Log in
          </a>
          <Button href="#pricing">Start Free</Button>
        </div>
        <button
          className="menu"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease }}
          >
            <Logo />
            <div>
              {navigation.map((item, index) => (
                <a
                  onClick={() => setOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  <span>0{index + 1}</span>
                  {item}
                </a>
              ))}
            </div>
            <Button href="#pricing">Start Free</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
