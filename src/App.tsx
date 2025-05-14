import "./App.css";
import Header from "./Header";
import Inputbox from "./Inputbox";

function App() {
  const fields = ["Name", "Experience", "Education"];

  return (
    <>
      <Header />
      <div className="grid-cols-1 w-96 bg-green-50 m-auto mt-12 p-4 grid gap-4 auto-rows-min divide-y-2 divide-dashed divide-green-900">
        {fields.map((f) => (
          <Inputbox label={f} value={f} />
        ))}
      </div>
    </>
  );
}

export default App;
