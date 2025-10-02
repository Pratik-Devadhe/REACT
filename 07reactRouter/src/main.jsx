import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from "./Layout.jsx";
import { Home , About , Contact , Github , User} from "./Componenets";

const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "about",
          element : <About />
        },
          {
          path : "contact",
          element : <Contact />
        },
        {
          path : "github",
          element : <Github />
        },
        {
          path : "user/:userId",
          element : <User />,
        }
      
      ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router} />
  </StrictMode>,
)
