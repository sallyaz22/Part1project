import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Root from './routs/Root';
import Home from './pages/Home/Component/Home';
import Login from './pages/LogIn/component/Login';
import Profile from './pages/Profile/Component/Profile';
import Notfound from './pages/Notfound/Notfound';
import Cart from './pages/Cart/component/Cart';
import Product from './pages/Product/component/Product';
import Categories from './pages/Categories/component/Categories';
import About from './pages/About/compenent/About';
import SignIn from './pages/SignIn/component/SignIn';
import Signup from './pages/SignUP/component/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Notfound/>,
    children:[

    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/cart',
      element:<Cart/>,
    },
   {
    path:'/product/:id',
    element:<Product/>
   },
  //  {
  //   path:'/login/:id',
  //   element:<Login/>
  //  },
  {
    path:'/categories/:id',
    element:<Categories/>
   },
   {
    path:'/Profile/:id',
    element:<Profile/>
   },
   {
    path:'/signin',
    element:<SignIn/>,
  },
  {
    path:'/signup',
    element:<Signup/>,
  },
   { 
      path:'/',
      element:<Notfound/>
    }


    ],
  },
]);

export default function App() {
  
   
  return (
    
    <>
           

<RouterProvider router={router} />
      </>
  )
}
  
  


