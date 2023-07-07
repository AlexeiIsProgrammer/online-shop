import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routesArray } from "../router/index.js" 

function AppRouter({sumOfBasket}) {
    return (
        <Routes>
            {
                routesArray.map(route => 
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}
                    />
                )
            }
            <Route path='/*' element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter