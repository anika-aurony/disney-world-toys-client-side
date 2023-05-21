import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import Login from "../component/Login/Login/Login";
import Register from "../component/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddAToy from "../component/AddAToy/AddAToy";
import MyToy from "../component/MyToy/MyToy";
import AllToys from "../component/AllToys/AllToys";
import ShowDetail from "../component/ShowDetail/ShowDetail";
import UpdateToy from "../component/UpdateToy/UpdateToy";
import Blogs from "../component/Blogs/Blogs";
import Page404 from "../component/Page404/Page404";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/allToys",
            element: <AllToys></AllToys>,
            loader: () => fetch('https://disney-world-toys-server-anika-tasnim-aurony.vercel.app/toys')
        },
        {
            path: `/showDetails/:id`,
            element: <PrivateRoutes><ShowDetail></ShowDetail></PrivateRoutes>,
            
        },
        {
            path: `/update/:id`,
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://disney-world-toys-server-anika-tasnim-aurony.vercel.app/toys/${params.id}`)
        },
        {
            path: "/addAToy",
            element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
            path: "/myToy",
            element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
      ]
    },
    {
      path: "*",
      element: <Page404></Page404>
    }
  ]);


export default router;