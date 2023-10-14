import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Category from './pages/CategoryPage/Category'
import Product from './pages/ProductPage/Product'
import Cart from './pages/Cart/Cart'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
 
 
  const Layout = () => {
     return (
       <div className="app">
         <Navbar />
         <Outlet />
         <Footer />
       </div>
     );
   };



  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };


   const router = createBrowserRouter([
     {
       path: '/',
       element: (
         <>
           <ScrollToTop />
           <Layout />
         </>
       ),
       children: [
         {
           path: '/',
           element: <Home />,
         },
         {
           path: '/categories/:id',
           element: <Category />,
         },
         {
           path: '/product/:id',
           element: <Product />,
         },
         {
           path: '/mycart',
           element: <Cart />,
         },
        
       ],
     },
   ]);

 


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
