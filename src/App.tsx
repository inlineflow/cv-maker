import "./App.css";
import { DynamicList, type DynamicListProps } from "./DynamicList";
import Header from "./Header";
import UserProfile from "./UserProfile";
import { SkillEntry } from "./SkillEntry";
import { cf } from "./ComponentFactory";
import { QualInput } from "./QualificationInput";

const TechSkillListProps: DynamicListProps[] = [
  { title: "Backend", style: "small", width: "w-full" },
  { title: "Frontend", style: "small" },
  { title: "DevOps", style: "small" },
];

const QualificationsProps: DynamicListProps[] = [
  { title: "Employment History" },
  { title: "Education" },
  { title: "Projects" },
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
              <DynamicList
                {...prop}
                width="w-min"
                blueprint={cf(SkillEntry, {
                  fontColor: "dark",
                })}
              />
            ))}
          </section>
        </div>
        <section id="qualifications" className="p-5">
          {QualificationsProps.map((prop) => (
            <DynamicList {...prop} blueprint={cf(QualInput)} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
