import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Route from './Route.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Route />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "user/:userId",
          element: <User />
        }
      ]
    },
  ],
  {
    initialEntries: ['/'],
  },
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>,
)
