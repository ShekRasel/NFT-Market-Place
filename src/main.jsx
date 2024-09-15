import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import Explore from './pages/Explore.jsx'
import Wallet from './pages/Wallet.jsx'
import Support from './pages/Support.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import CreateItem from './pages/CreateItem.jsx'

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
      },
      {
        path: 'explore-items',
        element: <Explore/>
      },
      {
        path: 'wallet',
        element: <Wallet/>
      },
      {
        path: 'support',
        element: <Support/>
      },
      {
        path: 'items-details',
        element: <ItemDetails/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'signin',
        element: <SignIn/>
      },
      {
        path: 'item-create',
        element: <CreateItem/>
      }
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Routes}/>
  </StrictMode>,
)
