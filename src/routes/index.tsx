import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default AppRoutes;
