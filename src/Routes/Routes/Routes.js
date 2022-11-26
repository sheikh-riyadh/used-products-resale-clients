import { createBrowserRouter } from "react-router-dom";
import DashboadLayout from "../../Layouts/DashboadLayout";
import Main from "../../Layouts/Main";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Dashboad from "../../Pages/Dashboad/Dashboad";
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AdminRouter from "../AdminRouter/AdminRouter";
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
        element: <DashboadLayout></DashboadLayout>,
        children: [
            {
                path: '/dashboad',
                element: <AdminRouter><Dashboad></Dashboad></AdminRouter>
            }
        ]
    }
])