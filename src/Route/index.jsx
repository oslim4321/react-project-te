import About from "@/pages/About";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/products/slug";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import Products from "@/pages/products";
import CreateProduct from "@/pages/dashboard/createProduct";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <h1>THis is the dashboard</h1>,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "settings",
        element: <h1>THis is the settings</h1>,
      },
      {
        path: "support",
        element: <h1>THis is the support</h1>,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
