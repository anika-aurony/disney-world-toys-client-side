import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import Login from "../component/Login/Login/Login";
import Register from "../component/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddAToy from "../component/AddAToy/AddAToy";
import MyToy from "../component/MyToy/MyToy";
import AllToys from "../component/AllToys/AllToys";

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
            path: "/allToys",
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/toys')
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
  ]);


export default router;