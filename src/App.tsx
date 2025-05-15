import "./App.css";
import Header from "./Header";
import Inputbox from "./Inputbox";
import UserProfile from "./UserProfile";

function App() {
  const fields = ["Name", "Experience", "Education"];

  return (
    <div className="mt-12 flex m-auto flex-col">
      <Header />
      <div className="grid-cols-1 max-w-dvw bg-sky-50 m-auto mt-4 p-4 grid gap-4 auto-rows-min ">
        <UserProfile />
        <section id="categories" className="grid grid-cols-1 gap-4 ">
          {fields.map((f) => (
            <Inputbox label={f} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
