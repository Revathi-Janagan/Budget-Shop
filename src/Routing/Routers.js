import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Product from "../Components/Product/Product";
import CardGroup from "../Pages/Cards/CardGroup";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cards",
        element: <CardGroup />,
      },
      {
        path: "/productshow",
        element: <Product />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
