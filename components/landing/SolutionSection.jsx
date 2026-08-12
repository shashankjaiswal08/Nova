import { BarChart3, CircleDot, Layers3, MessageSquare } from "lucide-react";
import { features } from "../../data/landing";
const icons = { Layers3, CircleDot, MessageSquare, BarChart3 };
export default function SolutionSection() {
  return (
    <section id="product" className="solution section">
      <div className="shell">
        <div className="split-heading">
          <span className="num">02 / THE SOLUTION</span>
          <h2>
            Everything your team needs.
            <br />
            <em>Nothing it doesn&apos;t.</em>
          </h2>
        </div>
        <div className="features-overview">
          {features.map(([name, copy, icon], index) => {
            const Icon = icons[icon];
            return (
              <article key={name}>
                <span>0{index + 1}</span>
                <Icon />
                <h3>{name}</h3>
                <p>{copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
