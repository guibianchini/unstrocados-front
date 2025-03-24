import React from "react";
import { Button } from "reactstrap";
import { useAppContext } from "../../context/AppContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useAppContext();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </Button>
  );
};

export default ThemeToggle;
