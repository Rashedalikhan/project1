import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home';
import {Contact} from './pages/Contact'
import {Register} from './pages/register'
import {Service} from './pages/Service'
import {About} from './pages/About'
import {Layout} from './components/Layout'
import { CartPage } from './pages/Cartpage';
import { SingleProduct } from './pages/SingleProduct';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path: "/register",
          element:<Register/>
        },
        {
          path: "/service",
          element:<Service/>
        },
        {
          path: "/contact",
          element:<Contact/>
        },
        {
          path: "/cart",
          element:<CartPage/>
        },
        {
          path: "/cart/:id",
          element:<SingleProduct/>
        },
      ]
    },
  ])
  return <RouterProvider router={router}/>
}