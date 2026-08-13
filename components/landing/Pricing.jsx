"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/landing";
import { Button } from "./shared";
export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <section id="pricing" className="pricing section">
      <div className="shell">
        <div className="pricing-intro">
          <span className="num">06 / PRICING</span>
          <h2>
            Start simple.
            <br />
            <em>Scale naturally.</em>
          </h2>
          <div className="toggle">
            <span className={!annual ? "on" : ""}>Monthly</span>
            <button
              aria-label="Toggle annual billing"
              aria-pressed={annual}
              onClick={() => setAnnual(!annual)}
            >
              <motion.i
                animate={{ x: annual ? 0 : -12 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              />
            </button>
            <span className={annual ? "on" : ""}>
              Yearly <b>save 17%</b>
            </span>
          </div>
        </div>
        <div className="pricing-cards">
          {pricingPlans.map(([name, price, copy, list], index) => (
            <motion.article
              key={name}
              className={index === 1 ? "featured" : ""}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {index === 1 && <label>MOST POPULAR</label>}
              <h3>{name}</h3>
              <p>{copy}</p>
              <strong>
                {index === 1 ? (annual ? "$10" : price) : price}
                {index === 1 && <small> / user / mo</small>}
              </strong>
              <Button secondary={index !== 1}>
                {index === 2 ? "Talk to us" : "Start free"}
              </Button>
              <ul>
                {list.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <p className="cancel">Cancel anytime.</p>
      </div>
    </section>
  );
}
