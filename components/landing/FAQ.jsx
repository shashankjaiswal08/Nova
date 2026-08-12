"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../../data/landing";
import { ease } from "./animations";
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="resources" className="faq section">
      <div className="shell">
        <div>
          <span className="num">07 / FAQ</span>
          <h2>
            Questions,
            <br />
            <em>answered.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article key={question}>
              <button
                onClick={() => setOpen(index === open ? -1 : index)}
                aria-expanded={open === index}
              >
                {question}
                <span>{open === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
