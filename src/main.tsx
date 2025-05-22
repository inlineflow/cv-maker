import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { myFactory } from "./a.tsx";
const Y = myFactory({ name: "bob", message: "hello" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Y />
    {/* {myFactory()}
    {myFactory()} */}
  </StrictMode>
);
