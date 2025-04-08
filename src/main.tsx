import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-['Space_Grotesk','Giest',sans-serif]">
      <App />
    </div>
  </StrictMode>
);
