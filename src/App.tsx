import type { FC } from "react";
import "./App.css";
import { DynamicList, type DynamicListProps } from "./DynamicList";
import Header from "./Header";
import UserProfile from "./UserProfile";
import { SkillEntry } from "./SkillEntry";

const TechSkillListProps: DynamicListProps<SkillEntry>[] = [
  { items: [], title: "Backend", style: "small" },
  { items: [], title: "Frontend", style: "small" },
  { items: [], title: "DevOps", style: "small" },
];

function App() {
  // const techSkills = {};

  return (
    <main className="mt-12 flex m-auto flex-col w-256">
      <Header />
      <div className="grid grid-cols-[1fr_4fr]">
        <UserProfile />
        <div className="p-5 ">
          <h2 className="text-2xl font-bold">Tech Skills</h2>
          <section id="tech-skills" className="flex flex-col col-start-1 gap-5">
            {TechSkillListProps.map((prop) => (
              <DynamicList {...prop} makeComponent={(arg) => SkillEntry(arg)} />
            ))}
            {/* <DynamicList items={[]} title="Backend" style="small" />
            <DynamicList items={[]} title="Frontend" style="small" />
            <DynamicList items={[]} title="DevOps" style="small" /> */}
          </section>
        </div>
        <div id="qualifications">
          <section id="employment-history" className="col-start-2 p-5">
            <DynamicList
              items={[UserProfile]}
              title="Employment History"
              makeComponent={() => UserProfile}
            />
          </section>
          <section id="education" className="col-start-2 p-5">
            <DynamicList items={[]} title="Education" />
          </section>
          <section id="projects" className="col-start-2 p-5">
            <DynamicList items={[]} title="Projects" />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
