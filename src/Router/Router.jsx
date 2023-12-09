import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../providers/ErrorPage";
import Brand from "../pages/Brand/Brand";
import AddProduct from "../pages/AddProduct/AddProduct";
import Details from "../pages/Details/Details";
import Cart from "../pages/Cart/Cart";
import PrivateRouter from "./PrivateRouter";
import UpdateProduct from "../pages/Update/UpdateProduct";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

// const axiosSecure = useAxiosSecure();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("/brands.json"),
        // loader: () => useAxiosSecure.get("/brands"),
        loader: () => fetch("http://localhost:5000/brands"),
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
        // loader: () => fetch("/brands.json"),
        loader: () => useAxiosSecure.get("/brands.json"),
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRouter>
            <AddProduct />
          </PrivateRouter>
        ),
      },

      {
        path: "/cart/:userId",
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
        // loader: ({ params }) =>
        //   axios.get(
        //     `https://digital-nest-backend.vercel.app/cart/${params.userId}`
        //   ),
        // loader: ({ params }) => useAxiosSecure.get(`/cart/${params.userId}`),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.userId}`),
      },

      {
        path: "/product/:id",
        element: (
          <PrivateRouter>
            <Details />
          </PrivateRouter>
        ),
        //   loader: ({ params }) =>
        //     fetch(`https://digital-nest-backend.vercel.app/product/${params.id}`),
        // },
        // loader: ({ params }) => useAxiosSecure.get(`/product/${params.id}`),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },

      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRouter>
            <UpdateProduct />
          </PrivateRouter>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://digital-nest-backend.vercel.app/product/${params.id}`),
        // loader: ({ params }) => useAxiosSecure.get(`/product/${params.id}`),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export { router };
