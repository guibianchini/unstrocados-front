import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import "./styles/custom.scss";

import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import App from "./App.tsx";
import LoadingFallback from "./pages/LoadingFallback/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
