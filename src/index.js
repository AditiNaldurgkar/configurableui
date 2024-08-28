import {createRoot} from "react-dom/client";
import Home from "./views/home/home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./views/about/about"
const root = createRoot(document.getElementById("root"))
const router =createBrowserRouter([{
    path:'/',
    element: <Home/>
},{
    path:'/about',
    element:<About/>
}])
root.render(<RouterProvider router={router}/>)