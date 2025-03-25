import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Bills from "../pages/Bills";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gastos" element={<Bills />} />
    </Routes>
  );
};

export default AppRoutes;
