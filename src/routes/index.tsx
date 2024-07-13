import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Dashboard from "../components/Layout/Dashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import Orders from "../pages/Dashboard/Orders";
import Users from "../pages/Dashboard/Users";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:productId",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <AdminDashboard />
            },
            {
                path: "/dashboard/add-product",
                element: <AddProduct />
            },
            {
                path: "/dashboard/orders",
                element: <Orders/>
            },
            {
                path: "/dashboard/users",
                element: <Users/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);


export default router;