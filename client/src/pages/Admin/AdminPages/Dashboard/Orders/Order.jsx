import { FiSearch } from "react-icons/fi";
import OrderLisiting from "../../AdminComponents/ListingTable/OrderLisiting";
import { AiOutlineEllipsis, AiOutlinePlus } from "react-icons/ai";

import AddProduct from "../../AdminComponents/AddProduct/AddProduct";
import { useState } from "react";


const Order = () => {

  const [isAddSlide , setIsAddSlide] = useState(false)

  const handleActiveSlide = () => {
    setIsAddSlide(true)
  }

  return (
    <div className="px-8 ">
      {/* Dashboard Title headers and search fields */}
      <div className="header my-10 flex items-center justify-between">
        <h1 className="text-[24px]">Order History</h1>
        <div className="left flex items-center gap-6">
          <div>
            <form className="flex items-center gap-3">
              <div className="bg-white px-2 flex items-center border border-blue-400 rounded">
                <input
                  type="search"
                  placeholder="Quick search by id"
                  className="bg-transparent p-2 rounded-[62px]  focus:outline-none  placeholder:text-[14px]"
                />
                <button>
                  <FiSearch size={20} />
                </button>
              </div>
            </form>
          </div>

          <button 
          onClick={
            handleActiveSlide
          }
          className="bg-blue-500 px-3 py-2 rounded text-white flex items-center gap-4">
            <AiOutlinePlus /> Add Product
          </button>
        </div>
      </div>

      {/* All products listings  */}
    
          <table className="w-full text-justify mb-10 ">
        <thead className="w-full bg-white h-[8vh] text-[14px] text-[#383e42]">
          <th className="border-r">
            <input type="checkbox" />
          </th>
          <th className="border-r">Order #</th>
          <th className="border-r ">Date</th>
          <th className="border-r">Status</th>
          <th className="border-r">Customer</th>
          <th className="border-r">Purchased</th>
          <th className="border-r w-[200px] ">Total</th>
          <th className="border-r text-center flex items-center justify-center">
            <button className="text-center hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out">
              <AiOutlineEllipsis size={24} className="mx-auto" />
            </button>
          </th>
        </thead>
        <OrderLisiting />
        <OrderLisiting />
        <OrderLisiting />
        <OrderLisiting />
      </table>
    


      {/* Modal Componenets */}
      {/* <OrderModal/> */}

      {/* Add Products Slide */}
      <AddProduct isAddSlide ={isAddSlide} setIsAddSlide={setIsAddSlide}/>
    </div>
  );
}

export default Order
