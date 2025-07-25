import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Optional: JS for components like modal, tooltip, etc.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
