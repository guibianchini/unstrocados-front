import React from "react";
import AppRoutes from "./routes";
import { AppProvider } from "./context/AppContext";
import { AuthenticationProvider } from "./context/AuthenticationContext";

const App: React.FC = () => {
  return (
    <AuthenticationProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </AuthenticationProvider>
  );
};

export default App;
