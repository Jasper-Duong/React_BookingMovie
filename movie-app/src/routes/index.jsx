import React from 'react'
import {useRoutes} from 'react-router-dom'
import AdminLayout from '../layouts/admin'
import Film from '../pages/Films/Film/Film'
import Login from '../pages/Login/login'
import ShowTime from '../pages/ShowTimes/showTime'
import User from '../pages/User/user'

export default function Router() {
    const routing = useRoutes([
        {
            path:"/admin",
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path: "/admin/user",
                    element: <User></User>
                },
                {
                    path: "/admin/Film",
                    element: <Film></Film>
                },
                {
                    path: "/admin/showTime",
                    element: <ShowTime></ShowTime>,
                },
                {
                    path: "/admin/login",
                    element: <Login></Login>,
                },
            ]
        }
    ])
  return (
    routing
  )
}
