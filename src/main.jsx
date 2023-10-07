import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Applied from './Components/Applied';
import Blogs from './Components/Blogs';
import Statistics from './Components/Statistics';
import Error from './Components/Error';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs> ,
      },
      {
        path: '/applied',
        element: <Applied></Applied> ,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics> ,
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }

    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
