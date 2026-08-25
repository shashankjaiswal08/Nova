import { footerGroups } from "../../data/landing";
import { Logo } from "./shared";
export default function Footer() {
  return (
    <footer className="px-0 py-[68px] pb-6">
      <div className="mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[2.6fr_repeat(4,1fr)] gap-[25px] max-[800px]:w-[min(100%-36px,600px)] max-[800px]:grid-cols-2 max-[800px]:gap-[35px]">
        <div>
          <Logo />
          <p className="mt-4 text-xs leading-[1.6] text-[#97958f]">
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
      <div className="mx-auto mt-[60px] flex w-[min(1180px,calc(100%-64px))] justify-between border-t border-[#272727] pt-5 text-[9px] text-[#73716d] max-[800px]:block max-[800px]:w-[min(100%-36px,600px)]">
        <span>© 2025 NOVA. A fictional portfolio project.</span>
        <div>
          <p>
            Email:{" "}
            <a href="mailto:er.shashankjaiswal08@gmail.com">
              er.shashankjaiswal08@gmail.com
            </a>
          </p>
          <a href="https://github.com/shashankjaiswal08/nova">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
