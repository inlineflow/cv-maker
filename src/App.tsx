import "./App.css";
import { DynamicList } from "./DynamicList";
import Header from "./Header";
import UserProfile from "./UserProfile";

function App() {
  return (
    <main className="mt-12 flex m-auto flex-col w-256">
      <Header />
      <div className="grid grid-cols-[1fr_4fr]">
        <UserProfile />
        <section id="education">
          <DynamicList items={["hello", "World"]} title="Education" />
        </section>
      </div>
    </main>
  );
}

export default App;
