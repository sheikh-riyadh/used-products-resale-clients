import { createBrowserRouter } from "react-router-dom";
import DashboadLayout from "../../Layouts/DashboadLayout";
import Main from "../../Layouts/Main";
import AllBuyers from "../../Pages/AdminPage/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AdminPage/AllSellers/AllSellers";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
                path: '/category-products/:id',
                element: <PrivateRouter><CategoryProducts></CategoryProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_api_url}/category-products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboad',
        element: <PrivateRouter><DashboadLayout></DashboadLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboad',
                element: <AllBuyers></AllBuyers>
            }, {
                path: '/dashboad/all-buyers',
                element: <AllBuyers></AllBuyers>
            }, {
                path: '/dashboad/all-seller',
                element: <AllSellers></AllSellers>
            }
        ]
    }
])