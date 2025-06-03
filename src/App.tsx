import "./App.css";
import { DynamicList, type DynamicListProps } from "./DynamicList";
import Header from "./Header";
import UserProfile from "./UserProfile";
import { SkillEntry } from "./SkillEntry";
import { cf } from "./ComponentFactory";
import { QualificationEntry } from "./QualificationEntry";
import { generateUUID } from "./util/uuid";

const TechSkillListProps: DynamicListProps[] = [
  { title: "Backend", style: "small" },
  { title: "Frontend", style: "small" },
  { title: "DevOps", style: "small" },
];

const QualificationsProps: DynamicListProps[] = [
  { title: "Employment History", liWidth: "w-full" },
  { title: "Education", liWidth: "w-full" },
  { title: "Projects", liWidth: "w-full" },
];

function App() {
  // const techSkills = {};

  return (
    <main className="mt-12 flex m-auto flex-col w-256">
      <Header />
      <div className="grid grid-cols-[1fr_4fr]">
        <UserProfile />
        <div className="p-5 max-w-full">
          <h2 className="text-2xl font-bold">Tech Skills</h2>
          <section id="tech-skills" className="flex flex-col col-start-1 gap-5">
            {TechSkillListProps.map((prop) => (
              <DynamicList
                {...prop}
                // width="w-min"
                blueprint={cf(SkillEntry, {
                  fontColor: "dark",
                  label: prop.title!,
                })}
                key={generateUUID()}
                orientation="row"
              />
            ))}
          </section>
        </div>
        <section id="qualifications" className="pl-5 pt-5">
          {QualificationsProps.map((prop) => (
            <DynamicList
              {...prop}
              blueprint={cf(QualificationEntry, {
                sectionName: prop.title,
              })}
              key={generateUUID()}
              className="max-w-full" //className="max-w-1/2"
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
