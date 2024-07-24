import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Course from './components/Coursepage/Course.jsx'
import Routing from './Routing.jsx'

const router = createBrowserRouter([
  {
   path:'',
   element:<Home/>
  },{
   path:'/',
   element:<Course/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
