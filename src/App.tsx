import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
