import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/features/Layout";
import Login from "./src/pages/Login/Login";
import Home from "./src/pages/Home/Home";
import Starex from "./src/pages/Starex";

export const routers = createBrowserRouter([
  {
    // element: <Layout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        element: <Starex />,
        path: "/anbar",
      },
    ],
  },
]);
