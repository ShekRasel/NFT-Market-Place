import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'

let Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: '/',
        element: <App/>
      },
      {
        path:'home',
        element: <Home/>
      }
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Routes}/>
  </StrictMode>,
)
