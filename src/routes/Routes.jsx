import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Page/Home";
import Root from "../Component/Page/Root";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           }
        ]
    }
])
export default router;