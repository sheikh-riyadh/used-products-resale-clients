import { createBrowserRouter } from "react-router-dom";
import DashboadLayout from "../../Layouts/DashboadLayout";
import Main from "../../Layouts/Main";
import AllBuyers from "../../Pages/AdminPage/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AdminPage/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import MyOrders from "../../Pages/BuyerPage/MyOrders/MyOrders";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AddProduct from "../../Pages/SellerPage/AddProduct/AddProduct";
import MyProducts from "../../Pages/SellerPage/MyProducts/MyProducts";
import AdminRouter from "../AdminRouter/AdminRouter";
import BuyerRouter from "../BuyerRouter/BuyerRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRouter from "../SellerRouter/SellerRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/category-products/:categoryName',
                element: <PrivateRouter><CategoryProducts></CategoryProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_api_url}/category-products/${params.categoryName}`)
            }, {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboad',
        element: <PrivateRouter><DashboadLayout></DashboadLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboad',
                element: <AdminRouter><AllBuyers></AllBuyers></AdminRouter>
            }, {
                path: '/dashboad/all-buyers',
                element: <AdminRouter><AllBuyers></AllBuyers></AdminRouter>
            }, {
                path: '/dashboad/all-sellers',
                element: <AdminRouter><AllSellers></AllSellers></AdminRouter>
            }, {
                path: '/dashboad/add-products',
                element: <SellerRouter><AddProduct></AddProduct> </SellerRouter>
            }, {
                path: '/dashboad/my-products',
                element: <SellerRouter><MyProducts></MyProducts></SellerRouter>
            }, {
                path: '/dashboad/my-orders',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])