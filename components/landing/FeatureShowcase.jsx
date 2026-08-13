"use client";
import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { showcaseFeatures } from "../../data/landing";
import { Analytics, TaskBoard } from "./ProductDashboard";
import Dashboard from "./ProductDashboard";
import { reveal } from "./animations";
import MotionProvider from "./MotionProvider";
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
    <MotionProvider>
      <section className="showcase section">
        <div className="shell">
          {showcaseFeatures.map(
            ([type, title, copy, bullets, category], index) => (
              <m.article
                className={`feature-row ${index % 2 ? "reverse" : ""}`}
                key={type}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <m.div
                  className="feature-visual"
                  whileHover={{ scale: 1.015, rotateY: index % 2 ? 4 : -4 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  <MiniUI type={type} />
                </m.div>
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
              </m.article>
            ),
          )}
        </div>
      </section>
    </MotionProvider>
  );
}
