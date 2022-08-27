import React from 'react'
import { useRoutes } from 'react-router-dom'
import ManagerGuard from '../guards/manager.guard'
import AdminLayout from '../layouts/admin'
import AddFilm from '../pages/addFilm/addFilm'
import Film from '../pages/Films/Film/Film'
import Login from '../pages/Login/login'
import UpdateFilm from '../pages/update-film/update-film'
import User from '../pages/User/user'
import UserEdit from '../pages/userEdit/userEdit'
import AddShowTime from '../pages/AddShowTime/addShowTime'
import ShowTimes from '../pages/ShowTimes/showTimes'

export default function Router() {
    const routing = useRoutes([
        {
            path: "/admin",
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path: "/admin/login",
                    element: <Login></Login>,
                },
                {
                    path: '/admin',
                    element: <ManagerGuard></ManagerGuard>,
                    children: [
                        {
                            path: "/admin/user",
                            element: <User></User>,
                        },
                        
                        {
                            path: '/admin/user/editUser',
                            element: <UserEdit></UserEdit>
                        },
                        {
                            path: '/admin/film/:filmId/update',
                            element: <UpdateFilm></UpdateFilm>,
                        },
                        {
                            path: '/admin/film/addFilm',
                            element: <AddFilm></AddFilm>,
                        },
                        {
                            path: "/admin/film",
                            element: <Film></Film>
                        },
                        {
                            path: "/admin/film/showtime/:filmId",
                            element: <AddShowTime></AddShowTime>
                        },
                        {
                            path: "/admin/film/showtime",
                            element: <ShowTimes></ShowTimes>,
                        },
                    ]
                },
            ]
        }
    ])
    return (
        routing
    )
}
