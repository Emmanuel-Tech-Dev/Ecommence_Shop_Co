import React, { useState } from 'react';
import { RiApps2Fill } from 'react-icons/ri';
import { BsFillBagFill } from 'react-icons/bs';
import { FaListAlt, FaHistory } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const DashboardNavbar = () => {

    const [activeTab, setActiveTab] = useState('dashboard'); // Initialize the activeTab state with the default active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };


  return (
    <div className="Side-Nav flex-[1] h-[100vh] max-h-full bg-white border-r">
      <div className="content flex flex-col gap-10">
        <div className="title">
          <img src="../image/logo.png" className="pt-6 px-3" />
        </div>

        <nav className="px-3">
          <ul className="">
           <Link to={'/dashboard'}>
             <li
              className={`${
                activeTab === 'dashboard' ? 'bg-[#eef3f7] opacity-[1]' : ''
              } py-3 px-2 rounded flex items-center gap-3 opacity-[.6] hover:bg-[#eef3f7] cursor-pointer hover:opacity-[1] transition-all duration-300 ease-in-out`}
              onClick={() => handleTabClick('dashboard')}
            >
              <RiApps2Fill />
              <span className="font-satoshi-bold">Dashboard</span>
            </li>
           </Link>
           
            <li
              className={`${
                activeTab === 'orders' ? 'bg-[#eef3f7] opacity-[1]' : ''
              } py-3 px-2 rounded flex items-center gap-3 opacity-[.6] hover:bg-[#eef3f7] cursor-pointer hover:opacity-[1] transition-all duration-300 ease-in-out`}
              onClick={() => handleTabClick('orders')}
            >
              <BsFillBagFill />
              <span className="font-satoshi-md">Orders</span>
            </li>
            <Link to={'/product_listings'}>
              <li
                className={`${
                  activeTab === 'products' ? 'bg-[#eef3f7] opacity-[1]' : ''
                } py-3 px-2 rounded flex items-center gap-3 opacity-[.6] hover:bg-[#eef3f7] cursor-pointer hover:opacity-[1] transition-all duration-300 ease-in-out`}
                onClick={() => handleTabClick('products')}
              >
                <FaListAlt />
                <span className="font-satoshi-md">Products</span>
              </li>
            </Link>
            <li
              className={`${
                activeTab === 'customers' ? 'bg-[#eef3f7] opacity-[1]' : ''
              } py-3 px-2 rounded flex items-center gap-3 opacity-[.6] hover:bg-[#eef3f7] cursor-pointer hover:opacity-[1] transition-all duration-300 ease-in-out`}
              onClick={() => handleTabClick('customers')}
            >
              <FaHistory />
              <span className="font-satoshi-md">Customers</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
