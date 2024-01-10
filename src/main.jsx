import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>
  },
  {
    path: "/about",
    element: <About></About>,
    errorElement: <Error></Error>
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
    errorElement: <Error></Error>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>,
)
