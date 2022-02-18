import Home from "../containers/components/Home";
import User from "../containers/components/User";
import React from "react";

export const routes=[
    {
        name:'Home',
        path:'/',
        component: <Home/>
    },   {
        name:'User',
        path:'/user',
        component: <User/>
    },
]
