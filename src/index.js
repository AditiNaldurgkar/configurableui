import {createRoot} from "react-dom/client";
import Home from "./views/home/home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const root = createRoot(document.getElementById("root"))
root.render(<Home/>)
const router =createBrowserRouter([{
    path:'/',
    element: <Home/>
},{
    path:'/about',
    element:<About/>
}])