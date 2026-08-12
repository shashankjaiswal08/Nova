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
    <div className={`dashboard ${compact ? "compact" : ""}`}>
      <aside className="dash-side">
        <div className="dash-brand">
          <i />
          nova
        </div>
        <div className="dash-nav">
          <span className="active">
            <Layers3 /> Overview
          </span>
          <span>
            <Target /> Projects
          </span>
          <span>
            <CircleDot /> My tasks
          </span>
          <span>
            <FileText /> Documents
          </span>
        </div>
        <div className="dash-workspace">
          <span>WORKSPACE</span>
          <b>
            Orbit <ChevronDown size={13} />
          </b>
          <AvatarStack />
        </div>
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <div>
            <p>Thursday, October 24</p>
            <h3>{data[0]}</h3>
          </div>
          <div className="top-icons">
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
      <div className="dashboard-summary">
        <div>
          <small>{mode === "projects" ? "PROJECTS" : "PROGRESS"}</small>
          <strong>
            {mode === "projects" ? "12" : "72"}
            <em>{mode === "projects" ? " active" : "%"}</em>
          </strong>
          <div className="progress">
            <i />
          </div>
        </div>
        <div>
          <small>FOCUS TIME</small>
          <strong>
            4.5<em> hours</em>
          </strong>
          <p className="positive">↑ 12% from last week</p>
        </div>
        <div className="mini-team">
          <small>TEAM ACTIVITY</small>
          <AvatarStack />
          <p>8 people active</p>
        </div>
      </div>
      <div className="dash-grid">
        <section className="task-list">
          <header>
            <h4>Today&apos;s priorities</h4>
            <button>
              <Plus size={15} />
            </button>
          </header>
          {[
            ["Finalise launch messaging", "Marketing", "violet"],
            ["Review design system", "Product", "blue"],
            ["Share weekly update", "Team", "orange"],
          ].map((item, index) => (
            <div className="dash-task" key={item[0]}>
              <span className={`check ${index === 0 ? "done" : ""}`}>
                {index === 0 && <Check size={10} />}
              </span>
              <div>
                <b>{item[0]}</b>
                <small>
                  <i className={item[2]} />
                  {item[1]}
                </small>
              </div>
              <span className="date">{index === 1 ? "Tomorrow" : "Today"}</span>
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
    <div className="kanban">
      {["Backlog", "In progress", "Done"].map((column, index) => (
        <section key={column}>
          <header>
            <span className={`dot d${index}`} />
            <b>{column}</b>
            <small>{[4, 3, 6][index]}</small>
          </header>
          {[
            "Map onboarding flow",
            "Write launch notes",
            "Refine dashboard",
            "Review feedback",
          ]
            .slice(index, index + 2)
            .map((task, taskIndex) => (
              <article key={task}>
                <span className="tag">{taskIndex ? "Design" : "Product"}</span>
                <b>{task}</b>
                <div>
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
    <div className="analytics">
      <section className="chart-card">
        <header>
          <div>
            <small>TEAM VELOCITY</small>
            <h4>
              42 <em>tasks completed</em>
            </h4>
          </div>
          <span className="pill">+18.4%</span>
        </header>
        <div className="chart">
          {Array.from({ length: 7 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
        <div className="chart-labels">
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
