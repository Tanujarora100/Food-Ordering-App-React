import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Body from './components/Body.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>,

      },
      {
        path: "/contact",
        element: <Contact></Contact>,

      }
    ],
    errorElement: <Error></Error>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>,
)
