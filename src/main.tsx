import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="w-svw h-svh bg-black flex flex-col justify-center items-center">
      <App locale="pt-BR" />
    </main>
  </StrictMode>
);
