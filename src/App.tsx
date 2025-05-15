import "./App.css";
import Header from "./Header";
import Inputbox from "./Inputbox";

function App() {
  const fields = ["Name", "Experience", "Education"];

  return (
    <div className="mt-12 flex m-auto flex-col">
      <Header />
      <div className="grid-cols-1 w-96 bg-green-50 m-auto mt-4 p-4 grid gap-4 auto-rows-min divide-y-2 divide-solid divide-green-200">
        {fields.map((f) => (
          <Inputbox label={f} value={f} />
        ))}
      </div>
    </div>
  );
}

export default App;
