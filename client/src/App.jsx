import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
 
 
} from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Category from './pages/CategoryPage/Category';
import Product from './pages/ProductPage/Product';
import Cart from './pages/Cart/Cart';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordReset from './pages/PassReset/PasswordReset';

// Admin Dashboard Components
import Dashboard from './pages/Admin/AdminPages/Dashboard/Dashboard/Dashboard';
import DashboardTopNav from './pages/Admin/AdminPages/AdminComponents/DashboardNavbar/DashboardTopNav';
import DashboardNavbar from './pages/Admin/AdminPages/AdminComponents/DashboardNavbar/DashboardNavbar';
import DashboardFooter from './pages/Admin/AdminPages/AdminComponents/DashboardFooter/DashboardFooter';

import Listings from './pages/Admin/AdminPages/Dashboard/AllProducts/Listings';
import Order from './pages/Admin/AdminPages/Dashboard/Orders/Order';
import Customer from './pages/Admin/AdminPages/Dashboard/Customer/Customer';
import { selectIsLoggedIn } from './redux/slice/authSlice';
import { useSelector } from 'react-redux';

function App() {

   const isLoggedIn = useSelector(selectIsLoggedIn)


  

  const Layout = ({ children }) => {
    return (
      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };

  const DashboardLoyout = ({ children }) => {
    return (
      <>
        <div className="dashboard-layout">
          <DashboardTopNav />
          <div className="Side-Nav dashboard-content">
            <DashboardNavbar />
          </div>
          <div className="Dashboard relative ">{children}</div>
          <DashboardFooter />
        </div>
      </>
    );
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  //User interface Routing

  const regularRoute = [
    {
      path: '/',
      element: (
        <>
          <ScrollToTop />

          <Layout>
            <Outlet />
          </Layout>
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
        { path: '/login', element: <Login /> },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/password_reset',
          element: <PasswordReset />,
        },
      ],
    },
  ];

  // Dashboard Routing
  
   const dashboardRoute = [
     {
       path: '/dashboard',
       element:  (
         <DashboardLoyout>
           <Dashboard />
         </DashboardLoyout>
       ) 
     },
     {
       path: '/orders',
       element: (
         <DashboardLoyout>
           <Order />
         </DashboardLoyout>
       ),
     },
     {
       path: '/product_listings',
       element: (
         <DashboardLoyout>
           <Listings />
         </DashboardLoyout>
       ),
     },
     {
       path: '/customers',
       element: (
         <DashboardLoyout>
           <Customer />
         </DashboardLoyout>
       ),
     },
   ];


  

  const router = createBrowserRouter(
   [...regularRoute , ...dashboardRoute]
  );

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
