import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinFill } from 'react-icons/ri';
import { LuEye } from 'react-icons/lu';

const OrderModal = () => {
  return (
    <div className="shadow absolute rounded bg-white w-[200px] right-[30px] z-[2]">
      <div className="p-3 space-y-3  text-[#788791]">
        <button className="flex items-center gap-3 ">
          <FiEdit />
          Edit Product
        </button>
         <button className="flex items-center gap-3 ">
          <LuEye />
          View Product
        </button> 
        <button className="flex items-center gap-3 ">
          <FiEdit />
          Remove Product
        </button>
       
      </div>
    </div>
  );
}

export default OrderModal
