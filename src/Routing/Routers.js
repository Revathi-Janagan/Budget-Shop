import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Product from "../Components/Product/Product";
import CardGroup from "../Pages/Cards/CardGroup";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Pages/Contact Us/ContactUs";
import AboutUs from "../Pages/About Us/AboutUs";
import ViewCart from "../Pages/View Cart/ViewCart";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
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
        path: "/productshow/:productId",
        element: <Product />,
      },
      {
        path:"/contact",
        element : <ContactUs />
      },
      {
        path : "/about",
        element : <AboutUs />
      },
      {
        path : "/viewcart",
        element : <ViewCart />
      }
     
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
