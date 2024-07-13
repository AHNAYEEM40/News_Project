import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Page/Shared/layoute/Home";
import Login from "../Component/Page/Shared/layoute/Login";
import About from "../Component/Page/Shared/News/About";
import Career from "../Component/Page/Shared/News/Career";
import Register from "../Component/Page/Shared/layoute/Register";
import Root from "../Component/Page/Shared/layoute/Root";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
           path:'/login',
           element:<Login></Login>
           },
           {
            path:'/about',
            element:<About></About>
           },
           {
            path:'/career',
            element:<Career></Career>
           },
           {
            path:'/register',
            element:<Register></Register>
           }
        ]
    }
])
export default router;