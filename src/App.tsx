import React from "react";
import AppRoutes from "./routes";
import { AppProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
