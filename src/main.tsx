import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterComponent from "./components/routerComponent.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
