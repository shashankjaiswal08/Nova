import { BarChart3, Command, Target, Zap } from "lucide-react";
export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="shell">
        <div className="benefits-top">
          <span className="num">05 / BUILT FOR FOCUS</span>
          <h2>
            Make room for
            <br />
            <em>meaningful work.</em>
          </h2>
        </div>
        <div className="benefit-grid">
          <article className="wide">
            <Zap />
            <h3>
              Less context
              <br />
              switching
            </h3>
            <p>
              Keep your team&apos;s work, communication, and decisions in one
              considered place.
            </p>
            <div className="orbit">
              <span />
              <span />
              <span />
              <i />
            </div>
          </article>
          <article>
            <Target />
            <h3>Clearer ownership</h3>
            <p>Everyone knows what they own and why it matters.</p>
          </article>
          <article>
            <BarChart3 />
            <h3>Better visibility</h3>
            <p>Progress without asking for another update.</p>
          </article>
          <article className="dark">
            <h3>
              One source
              <br />
              of truth.
            </h3>
            <p>Bring every project back to a single, trusted home.</p>
            <Command />
          </article>
        </div>
      </div>
    </section>
  );
}
