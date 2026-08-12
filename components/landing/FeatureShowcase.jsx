"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { showcaseFeatures } from "../../data/landing";
import { Analytics, TaskBoard } from "./ProductDashboard";
import Dashboard from "./ProductDashboard";
import { reveal } from "./animations";
function MiniUI({ type }) {
  return (
    <div className={`mini-ui ${type}`}>
      {type === "tasks" ? (
        <TaskBoard />
      ) : type === "analytics" ? (
        <Analytics />
      ) : (
        <Dashboard compact />
      )}
    </div>
  );
}
export default function FeatureShowcase() {
  return (
    <section className="showcase section">
      <div className="shell">
        {showcaseFeatures.map(
          ([type, title, copy, bullets, category], index) => (
            <motion.article
              className={`feature-row ${index % 2 ? "reverse" : ""}`}
              key={type}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
            >
              <div className="feature-visual">
                <MiniUI type={type} />
              </div>
              <div className="feature-copy">
                <span className="num">
                  0{index + 1} / {category}
                </span>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{copy}</p>
                <ul>
                  {bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={15} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#demo">
                  Explore {type}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ),
        )}
      </div>
    </section>
  );
}
