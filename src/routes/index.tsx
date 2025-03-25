import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "../pages/Index";
import Bills from "../pages/Bills";
import { AppProvider } from "src/context/AppContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/gastos" element={<Bills />} />
    </>
  )
);

const AppRoutes: React.FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default AppRoutes;
