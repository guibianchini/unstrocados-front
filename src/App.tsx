import React from "react";
import { AppProvider } from "./context/AppContext";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div>
        <h1>Hello, React with TypeScript!</h1>
        <ThemeToggle />
      </div>
    </AppProvider>
  );
};

export default App;
