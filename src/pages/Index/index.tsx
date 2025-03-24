import React from "react";
import ThemeToggle from "../../components/ThemeToggle";
import Header from "../../components/HeaderComponent";

const Index: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Hello, React with TypeScript!</h1>
      <ThemeToggle />
    </div>
  );
};

export default Index;
