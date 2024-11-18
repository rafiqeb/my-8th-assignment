import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Statistics from './pages/Statistics.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AllProducts from './components/AllProducts.jsx';
import ViewDetails from './components/ViewDetails.jsx';
import Cart from './pages/Cart.jsx';
import Wish from './pages/Wish.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Thanks from './pages/Thanks.jsx';
import { HelmetProvider } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../products.json')
          },
          {
            path: '/category/:category',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../products.json')
          }
        ]
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/thanks',
        element: <Thanks></Thanks>
      },
      {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('../products.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "",
            element: <Cart></Cart>,
            loader: () => fetch('../products.json')
          },
          {
            path: 'cart',
            element: <Cart></Cart>,
            loader: () => fetch('../products.json')
          },
          {
            path: 'wish',
            element: <Wish></Wish>,
            loader: () => fetch('../products.json')
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  </StrictMode>,
)
