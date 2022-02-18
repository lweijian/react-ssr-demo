import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom'
import {routes} from '../router/config'

export const App =()=> {

    return <>
        <Routes>
            {routes.map(route=>{
                return <Route path={route.path} key={route.name} element={route.component} />
            })}
        </Routes>
        </>
}
export default App
