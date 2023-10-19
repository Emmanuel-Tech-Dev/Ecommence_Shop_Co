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
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
           path: '/cart',
           element: <Cart />,
         },
         {path : '/login' , 
          element : <Login/>
        },
        {
          path : '/signup',
          element: <SignUp/>
        }
        
       ],
     },
   ]);

 


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
      
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
