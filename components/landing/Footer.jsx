import { footerGroups } from "../../data/landing";
import { Logo } from "./shared";
export default function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p>
            One workspace for
            <br />
            modern teams.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group[0]}>
            <b>{group[0]}</b>
            {group.slice(1).map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <span>© 2025 NOVA. A fictional portfolio project.</span>
        <div>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
