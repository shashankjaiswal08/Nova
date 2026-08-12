import { ArrowUpRight } from "lucide-react";
import { Button } from "./shared";
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-lines" />
      <div className="shell">
        <span className="num">MAKE THE SHIFT</span>
        <h2>
          Ready to make
          <br />
          work feel <em>simpler?</em>
        </h2>
        <p>
          Bring your projects, people and priorities into one focused workspace.
        </p>
        <div>
          <Button>Start Free</Button>
          <Button secondary href="#">
            Book a demo <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
