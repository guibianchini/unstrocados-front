import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Bills from "src/pages/Bills";
import Index from "src/pages/Index";
import Invoice from "src/pages/Invoice";
import { lazyWithDelay } from "src/services/util";

const Login = lazyWithDelay(() => import("src/pages/Login"), 1000);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Index />} />
      <Route path="gastos" element={<Bills />} />
      <Route path="faturas" element={<Invoice />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
