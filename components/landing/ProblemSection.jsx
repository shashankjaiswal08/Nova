"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { problems } from "../../data/landing";
import { reveal } from "./animations";
export default function ProblemSection() {
  return (
    <section id="solutions" className="problems section">
      <div className="shell">
        <motion.div
          className="section-intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span className="num">01 / THE PROBLEM</span>
          <h2>
            Your team doesn&apos;t need
            <br />
            more <em>tools.</em>
          </h2>
          <p>
            Projects become complicated when work is scattered across messages,
            documents, spreadsheets and disconnected apps.
          </p>
        </motion.div>
        <div className="problem-list">
          {problems.map((item, index) => (
            <motion.article
              key={item[0]}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                ...reveal,
                show: {
                  ...reveal.show,
                  transition: { ...reveal.show.transition, delay: index * 0.1 },
                },
              }}
            >
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
              <ArrowUpRight />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
