import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="w-svw h-svh bg-black flex flex-col justify-center items-center">
      <App
        appointmentData={{
          duration: 1,
          onSchedule: () => Promise.resolve(),

          label: {
            calendar: "Calendar",
            hourPicker: "Hour Picker",
          },
          locale: "pt-BR",
        }}
      />
    </main>
  </StrictMode>
);
