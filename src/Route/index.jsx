import About from "@/pages/About";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/products/slug";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import Products from "@/pages/products";
import CreateProduct from "@/pages/dashboard/createProduct";
import AuthPage from "./AuthPage";
import SignUp from "@/pages/auth/signup";
import Login from "@/pages/auth/login";
import Dashboard from "@/pages/dashboard";
import TodoList from "@/pages/todolist";

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
      {
        path: "todolist",
        element: <TodoList />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
