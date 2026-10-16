import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { App } from "./App.jsx";
import AuthProvider from "./components/context/auth/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/triple_individual">
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
