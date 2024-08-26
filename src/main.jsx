import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './error-page.jsx'
import Destination from './routes/destination.jsx'
import Crew from './routes/crew.jsx'
import Technology from './routes/technology.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Nesting other routes inside the app route(Root Route)
    children: [
      {
      path: "/destination",
        element: <Destination />
      },
      {
        path: "/crew",
        element:<Crew />
      },
      {
        path: "/technology",
        element:<Technology />
      }
    ]    
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
