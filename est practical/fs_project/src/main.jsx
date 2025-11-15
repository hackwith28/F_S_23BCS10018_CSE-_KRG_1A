import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Home name="Reetesh" />
      <Home />
    </div>
  </StrictMode> 
);
