import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "../pages/Index";
import Bills from "../pages/Bills";
import Invoice from "src/pages/Invoice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Index />} />
      <Route path="gastos" element={<Bills />} />
      <Route path="faturas" element={<Invoice />} />
    </Route>
  )
);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
