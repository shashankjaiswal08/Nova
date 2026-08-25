import {
  BarChart3,
  Check,
  ChevronDown,
  CircleDot,
  FileText,
  Layers3,
  Plus,
  Search,
  Target,
} from "lucide-react";
import { AvatarStack } from "./shared";

export default function Dashboard({ mode = "overview", compact = false }) {
  const data = {
    overview: ["Product launch", "6 tasks today", "72% complete"],
    projects: ["Active projects", "12 in flight", "View all work"],
    tasks: ["My tasks", "6 due this week", "Focus mode on"],
    analytics: ["Team velocity", "+18% this month", "On track"],
  }[mode];
  return (
    <div
      className={`flex min-h-[440px] overflow-hidden rounded-lg border border-white/20 bg-[#e9e9e7] text-left text-[#242321] ${compact ? "max-[800px]:min-h-[260px]" : ""}`}
    >
      <aside className="flex w-[178px] flex-none flex-col bg-[#dededc] p-5 px-3 max-[800px]:w-[105px] max-[800px]:p-3">
        <div className="flex items-center gap-1.5 px-2 text-[15px] font-extrabold tracking-[-0.08em]">
          <i className="block h-[9px] w-[9px] rounded-full bg-[#8d76ff]" />
          nova
        </div>
        <div className="mt-8 grid gap-1 max-[800px]:mt-[18px]">
          <span className="flex items-center gap-2 rounded bg-[#cfcfcd] p-2 text-[10px] font-bold max-[800px]:text-[0px]">
            <Layers3 /> Overview
          </span>
          <span className="flex items-center gap-2 p-2 text-[10px] text-[#72716e] max-[800px]:text-[0px]">
            <Target /> Projects
          </span>
          <span className="flex items-center gap-2 p-2 text-[10px] text-[#72716e] max-[800px]:text-[0px]">
            <CircleDot /> My tasks
          </span>
          <span className="flex items-center gap-2 p-2 text-[10px] text-[#72716e] max-[800px]:text-[0px]">
            <FileText /> Documents
          </span>
        </div>
        <div className="mt-auto border-t border-[#c9c9c6] p-4 px-2 text-[10px] max-[800px]:hidden">
          <span>WORKSPACE</span>
          <b>
            Orbit <ChevronDown size={13} />
          </b>
          <AvatarStack />
        </div>
      </aside>
      <div className="min-w-0 w-full p-[26px_28px] max-[800px]:p-[17px_14px] max-[500px]:p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="mb-1 font-mono text-[7px] text-[#85837f]">
              Thursday, October 24
            </p>
            <h3 className="m-0 text-xl tracking-[-0.07em]">{data[0]}</h3>
          </div>
          <div className="flex items-center gap-[15px] text-[#686763]">
            <Search size={16} />
            <span>AM</span>
          </div>
        </div>
        {mode === "tasks" ? (
          <TaskBoard />
        ) : mode === "analytics" ? (
          <Analytics />
        ) : (
          <Overview mode={mode} />
        )}
      </div>
    </div>
  );
}
export function Overview({ mode }) {
  return (
    <>
      <div className="mt-[23px] grid grid-cols-[1.15fr_1fr_1fr] gap-3 max-[800px]:grid-cols-2 max-[500px]:gap-1.5">
        <div className="rounded border border-[#d9d9d6] bg-[#f6f6f4] p-3.5 max-[500px]:p-2">
          <small>{mode === "projects" ? "PROJECTS" : "PROGRESS"}</small>
          <strong>
            {mode === "projects" ? "12" : "72"}
            <em>{mode === "projects" ? " active" : "%"}</em>
          </strong>
          <div className="h-1 overflow-hidden rounded bg-[#dededb]">
            <i className="block h-full w-[72%] rounded bg-[#8268ed]" />
          </div>
        </div>
        <div className="rounded border border-[#d9d9d6] bg-[#f6f6f4] p-3.5">
          <small>FOCUS TIME</small>
          <strong>
            4.5<em> hours</em>
          </strong>
          <p className="text-[8px] text-[#4e9772]">↑ 12% from last week</p>
        </div>
        <div className="rounded border border-[#d9d9d6] bg-[#f6f6f4] p-3.5 max-[800px]:hidden">
          <small>TEAM ACTIVITY</small>
          <AvatarStack />
          <p>8 people active</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[1.2fr_1fr] gap-3 max-[800px]:grid-cols-1">
        <section className="rounded border border-[#d9d9d6] bg-[#f6f6f4] p-3.5">
          <header className="flex items-center justify-between">
            <h4 className="m-0 text-[10px]">Today&apos;s priorities</h4>
            <button className="h-[21px] rounded border-0 bg-[#dededa] p-1">
              <Plus size={15} />
            </button>
          </header>
          {[
            ["Finalise launch messaging", "Marketing", "violet"],
            ["Review design system", "Product", "blue"],
            ["Share weekly update", "Team", "orange"],
          ].map((item, index) => (
            <div className="flex items-center gap-2 pt-2" key={item[0]}>
              <span
                className={`grid h-[13px] w-[13px] place-items-center rounded-full border ${index === 0 ? "border-[#8b73f6] bg-[#8b73f6] text-white" : "border-[#b9b8b4]"}`}
              >
                {index === 0 && <Check size={10} />}
              </span>
              <div>
                <b>{item[0]}</b>
                <small>
                  <i className={item[2]} />
                  {item[1]}
                </small>
              </div>
              <span className="ml-auto text-[7px] text-[#8e8c88]">
                {index === 1 ? "Tomorrow" : "Today"}
              </span>
            </div>
          ))}
        </section>
        <section className="timeline">
          <header>
            <h4>Project timeline</h4>
            <span>Week 43</span>
          </header>
          <div className="timeline-days">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span className="today">Thu</span>
            <span>Fri</span>
          </div>
          <div className="timeline-row">
            <b>Launch</b>
            <i style={{ width: "64%", marginLeft: "8%" }} />
          </div>
          <div className="timeline-row">
            <b>Website</b>
            <i style={{ width: "44%", marginLeft: "25%" }} />
          </div>
          <div className="timeline-row">
            <b>Content</b>
            <i style={{ width: "35%", marginLeft: "14%" }} />
          </div>
        </section>
      </div>
    </>
  );
}
export function TaskBoard() {
  return (
    <div className="grid h-full grid-cols-3 gap-3 p-0.5 max-[800px]:gap-1">
      {["Backlog", "In progress", "Done"].map((column, index) => (
        <section className="min-w-0" key={column}>
          <header className="flex items-center justify-between px-0.5 pb-2.5 text-[8px]">
            <span
              className={`mr-1 h-[5px] w-[5px] rounded-full ${index === 0 ? "bg-[#8370df]" : index === 1 ? "bg-[#6cac84]" : "bg-[#9d9c99]"}`}
            />
            <b>{column}</b>
            <small className="rounded-full bg-[#d4d4d1] px-1 py-0.5">
              {[4, 3, 6][index]}
            </small>
          </header>
          {[
            "Map onboarding flow",
            "Write launch notes",
            "Refine dashboard",
            "Review feedback",
          ]
            .slice(index, index + 2)
            .map((task, taskIndex) => (
              <article
                className="mb-2 flex min-h-[92px] flex-col items-start gap-2 rounded border border-[#d9d9d5] bg-[#f8f8f6] p-2.5"
                key={task}
              >
                <span className="rounded-sm bg-[#e9e3ff] p-0.5 text-[6px] text-[#735ee1]">
                  {taskIndex ? "Design" : "Product"}
                </span>
                <b className="text-[8px] leading-[1.35]">{task}</b>
                <div className="mt-auto flex w-full items-center justify-between">
                  <AvatarStack />
                  <small>{taskIndex + 2}</small>
                </div>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
export function Analytics() {
  return (
    <div className="h-full">
      <section className="h-[205px] rounded border border-[#d9d9d6] bg-[#f6f6f4] p-3.5">
        <header className="flex items-center justify-between">
          <div>
            <small>TEAM VELOCITY</small>
            <h4>
              42 <em>tasks completed</em>
            </h4>
          </div>
          <span className="pill">+18.4%</span>
        </header>
        <div className="flex h-[105px] items-end justify-between gap-2 border-b border-[#d9d8d5] px-1 py-4">
          {Array.from({ length: 7 }, (_, index) => (
            <i
              className="block w-[13%] rounded-t-sm bg-[#b2a0fa]"
              style={{ height: `${[45, 65, 42, 82, 60, 75, 95][index]}%` }}
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-between px-1 py-1.5 text-[6px] text-[#84827e]">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </section>
      <section className="metrics">
        <div>
          <small>On track</small>
          <strong>84%</strong>
          <div className="progress">
            <i />
          </div>
        </div>
        <div>
          <small>Focus time</small>
          <strong>31.5h</strong>
          <p>↑ 8% this week</p>
        </div>
      </section>
    </div>
  );
}
