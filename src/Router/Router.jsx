import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Chat from "../Pages/Chat";
import Users from "../Pages/Users";
import MarketPlace from "../Pages/MarketPlace";
import Group from "../Pages/Group";
import MarketItemDetails from "../Components/MarketItemDetails";
import Teachers from "../Pages/Teachers";
import Notices from "../Pages/Notices";
import Departments from "../Pages/Departments";
import Students from "../Pages/Students";
import Events from "../Pages/Events";
import Contact from "../Pages/Contact";
import GroupOverview from "../Components/GroupOverview";


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
                path: "/marketPlace/:id",
                element: <MarketItemDetails></MarketItemDetails>
            },            
            {
                path: "/group",
                element: <Group></Group>
            },            
            {
                path: "/group/:id",
                element: <GroupOverview></GroupOverview>
            },            
            {
                path: "/notices",
                element: <Notices></Notices>
            },            
            {
                path: "/departments",
                element: <Departments></Departments>
            },                       
            {
                path: "/teachers",
                element: <Teachers></Teachers>
            },            
            {
                path: "/students",
                element: <Students></Students>
            },            
            {
                path: "/events",
                element: <Events></Events>
            },            
            {
                path: "/contact",
                element: <Contact></Contact>
            },            
        ]
    },
])

export default router;