import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Chat from "../Pages/Chat";
import Users from "../Pages/Users";
import MarketPlace from "../Pages/MarketPlace";
import Group from "../Pages/Group";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/chat",
                element: <Chat></Chat>
            },            
            {
                path: "/users",
                element: <Users></Users>
            },            
            {
                path: "/marketPlace",
                element: <MarketPlace></MarketPlace>
            },            
            {
                path: "/group",
                element: <Group></Group>
            },            
        ]
    },
])

export default router;