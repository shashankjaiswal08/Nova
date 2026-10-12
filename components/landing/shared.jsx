import { ArrowRight } from "lucide-react";
import { avatars } from "../../data/landing";

export function Logo() {
  return (
    <a
      href="#top"
      aria-label="NOVA home"
      className="
        inline-flex
        items-center
        gap-2
        text-[17px]
        font-extrabold
        tracking-[-0.08em]
      "
    >
      <i
        aria-hidden="true"
        className="
          block
          h-[13px]
          w-[13px]
          rounded-full
          bg-[conic-gradient(from_25deg,#f4f2ee_0_25%,var(--violet)_25%_52%,#4f38c6_52%_75%,#f4f2ee_75%)]
        "
      />
      NOVA
    </a>
  );
}

export function Button({ children, secondary = false, href = "#pricing" }) {
  return (
    <a
      href={href}
      className={`
        group
        inline-flex
        min-h-11
        items-center
        justify-center
        gap-3
        whitespace-nowrap
        rounded-[5px]
        border
        px-[18px]
        text-xs
        font-extrabold
        tracking-[-0.02em]
        transition-[transform,background,border-color]
        duration-300
        ${
          secondary
            ? "border-[#343434] bg-transparent text-[#e7e5df] hover:-translate-y-0.5 hover:bg-[#181818]"
            : "border-[#a992ff] bg-[#967cff] text-[#0c0b0d] hover:-translate-y-0.5 hover:bg-[#ad98ff]"
        }
      `}
    >
      {children}

      {!secondary && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

export function AvatarStack() {
  return (
    <div className="flex items-center">
      {avatars.map((color, index) => (
        <span
          key={color}
          className="
            grid
            h-[19px]
            w-[19px]
            place-items-center
            rounded-full
            border-[1.5px]
            border-[#e6e6e4]
            text-[6px]
            font-extrabold
            text-[#332f2e]
            first:ml-0
            -ml-[5px]
          "
          style={{
            backgroundColor: color,
            zIndex: 4 - index,
          }}
        >
          {["M", "J", "A", "R"][index]}
        </span>
      ))}
    </div>
  );
}
