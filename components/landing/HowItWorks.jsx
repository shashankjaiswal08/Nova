import { steps } from "../../data/landing";
export default function HowItWorks() {
  return (
    <section className="how section">
      <div className="shell">
        <span className="num">04 / HOW IT WORKS</span>
        <h2>
          From idea to <em>shipped.</em>
        </h2>
        <div className="steps">
          {steps.map((item) => (
            <article key={item[0]}>
              <span>{item[0]}</span>
              <div />
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
