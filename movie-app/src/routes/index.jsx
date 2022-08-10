import React from 'react'
import {useRoutes} from 'react-router-dom'
import AdminLayout from '../layouts/admin'
import Film from '../pages/Films/Film/Film'
import MovieManagement from '../pages/movie-management/movie-management'

export default function Router() {
    const routing = useRoutes([
        {
            path:"/admin",
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path: "/admin/movie-management",
                    element: <MovieManagement></MovieManagement>
                },
                {
                    path: "/admin/Film",
                    element: <Film></Film>
                },
            ]
        }
    ])
  return (
    routing
  )
}
