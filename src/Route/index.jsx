import About from "@/pages/About";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/products/slug";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/products",
    element: <h1>THis is all the prodct</h1>,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
