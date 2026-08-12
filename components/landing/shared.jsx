import { ArrowRight } from "lucide-react";
import { avatars } from "../../data/landing";
export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="NOVA home">
      <i />
      NOVA
    </a>
  );
}
export function Button({ children, secondary = false, href = "#pricing" }) {
  return (
    <a href={href} className={`button ${secondary ? "button-secondary" : ""}`}>
      {children}
      {!secondary && <ArrowRight size={16} />}
    </a>
  );
}
export function AvatarStack() {
  return (
    <div className="avatars">
      {avatars.map((color, index) => (
        <span key={color} style={{ background: color, zIndex: 4 - index }}>
          {["M", "J", "A", "R"][index]}
        </span>
      ))}
    </div>
  );
}
