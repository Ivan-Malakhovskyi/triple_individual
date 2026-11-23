import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { App } from "./App.jsx";
import AuthProvider from "./components/context/auth/Provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/triple_individual">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
