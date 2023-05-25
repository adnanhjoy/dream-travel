import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import Packages from "../../pages/Packages/Packages";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Package from "../../pages/Package/Package";

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
                path: '/spot',
                element: <Packages></Packages>,
            },
            {
                path: '/places/:id',
                element: <Package></Package>,
                loader: ({params}) => fetch(`http://localhost:5000/places/${params.id}`)
            },
            // {
            //     path: '/package',
            //     element: <Package></Package>
            // },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])