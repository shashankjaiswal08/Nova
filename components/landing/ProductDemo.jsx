"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Dashboard from "./ProductDashboard";
export default function ProductDemo() {
  const [tab, setTab] = useState("overview");
  return (
    <section id="demo" className="product-demo section">
      <div className="shell">
        <div className="demo-heading">
          <span className="num">03 / IN MOTION</span>
          <h2>
            A workspace that
            <br />
            works <em>with you.</em>
          </h2>
          <p>A little less admin. A lot more forward motion.</p>
        </div>
        <div className="demo-window">
          <div className="tabs" role="tablist" aria-label="Product views">
            {["overview", "projects", "tasks", "analytics"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={tab === item ? "selected" : ""}
                role="tab"
                aria-selected={tab === item}
              >
                {item}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <Dashboard mode={tab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
