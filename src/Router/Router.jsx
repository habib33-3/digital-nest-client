import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../providers/ErrorPage";
import Brand from "../pages/Brand/Brand";
import AddProduct from "../pages/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/brand/:brandName",
        element: <Brand />,
        loader: () => fetch("/brands.json"),
      },

      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export { router };
