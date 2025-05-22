import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { myFactory } from "./a.tsx";
import { Name } from "./Name.tsx";
const Y = myFactory(Name, { name: "bob", message: "hello" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Y />
    {/* {myFactory()}
    {myFactory()} */}
  </StrictMode>
);
