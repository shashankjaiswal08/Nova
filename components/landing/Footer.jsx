import { footerGroups } from "../../data/landing";
import { Logo } from "./shared";

export default function Footer() {
  return (
    <footer className="px-4 py-16 sm:px-6 sm:py-[68px] lg:px-8">
      {/* =========================
          MAIN FOOTER
      ========================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-2
          gap-x-8
          gap-y-12
          sm:gap-x-10
          sm:gap-y-14
          md:grid-cols-3
          md:gap-x-8
          lg:grid-cols-[2.6fr_repeat(4,1fr)]
          lg:gap-[25px]
        "
      >
        {/* =========================
            BRAND
        ========================== */}

        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo />

          <p
            className="
              mt-4
              max-w-[220px]
              text-xs
              leading-[1.6]
              text-[#97958f]
            "
          >
            One workspace for
            <br />
            modern teams.
          </p>
        </div>

        {/* =========================
            FOOTER GROUPS
        ========================== */}

        {footerGroups.map((group) => (
          <div
            key={group[0]}
            className="min-w-0"
          >
            <b
              className="
                mb-4
                block
                font-manrope
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#f2f0ec]
              "
            >
              {group[0]}
            </b>

            <div className="flex flex-col gap-2.5">
              {group.slice(1).map((item) => (
                <a
                  href="#"
                  key={item}
                  className="
                    w-fit
                    max-w-full
                    break-words
                    text-[11px]
                    leading-5
                    text-[#73716d]
                    transition-colors
                    duration-300
                    hover:text-[#f2f0ec]
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================== */}

      <div
        className="
          mx-auto
          mt-14
          flex
          w-full
          max-w-[1180px]
          flex-col
          gap-5
          border-t
          border-[#272727]
          pt-5
          text-[9px]
          text-[#73716d]

          sm:mt-[60px]

          md:flex-row
          md:items-start
          md:justify-between
          md:gap-8
        "
      >
        {/* Copyright */}

        <span className="leading-5">
          © 2025 NOVA. A fictional portfolio project.
        </span>

        {/* Contact + GitHub */}

        <div
          className="
            flex
            flex-col
            gap-2
            md:items-end
          "
        >
          <p className="m-0 leading-5">
            Email:{" "}
            <a
              href="mailto:er.shashankjaiswal08@gmail.com"
              className="
                break-all
                transition-colors
                duration-300
                hover:text-[#f2f0ec]
              "
            >
              er.shashankjaiswal08@gmail.com
            </a>
          </p>

          <a
            href="https://github.com/shashankjaiswal08/nova"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-fit
              transition-colors
              duration-300
              hover:text-[#f2f0ec]
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

