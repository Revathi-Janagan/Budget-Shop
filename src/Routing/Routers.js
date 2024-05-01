import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import ProductedRoutes from "../Components/ProductedRoutes";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Product from "../Components/Product/Product";
import CardGroup from "../Pages/Cards/CardGroup";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Pages/Contact Us/ContactUs";
import AboutUs from "../Pages/About Us/AboutUs";
import ViewCart from "../Pages/View Cart/ViewCart";
import BuyPage from "../Pages/BuyPage/BuyPage";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="page-content">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };
const Layout = () => {
  // Get the current location using useLocation()
  const location = useLocation();

  // Define an array of paths where you want to hide the footer
  const pathsWithoutFooter = ["/login"]; 
  // Check if the current location is in the pathsWithoutFooter array
  const hideFooter = pathsWithoutFooter.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
      {/* Conditionally render the Footer based on hideFooter */}
      {!hideFooter && <Footer />}
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
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/viewcart",
        element: (
          <ProductedRoutes>
            <ViewCart />
          </ProductedRoutes>
        ),
      },
      {
        path: "/buypage",
        element: (
          <ProductedRoutes>
            <BuyPage />
          </ProductedRoutes>
        ),
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
