import React from 'react'
import { AiOutlineEllipsis, AiOutlineEye } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci';

const OrderLisiting = () => {
  return (
    <>
      <br></br>
      <tbody className="bg-white text-[#788791] font-satoshi ">
        <td className="border-r">
          <input type="checkbox" />
        </td>
        <td className="border-r text-blue-400 ">#383e42</td>
        <td className="border-r">Nov 4 , 2023</td>
        <td className="border-r">
          <span className="p-2 bg-orange-50 text-orange-400 rounded text-[.8rem]">
            &#x2022; On Hold
          </span>
        </td>
        <td className="border-r">Mr, Emmanuel</td>
        <td className="border-r text-blue-400">12 items</td>
        <td className="border-r  text-black font-satoshi-md ">
          <div className=" flex items-center justify-between">
            <span>$2450</span>
            <div className="icons flex items-center gap-2">
              <button className=" hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out ">
                <AiOutlineEye size={24} color="#383e42" className="mx-auto" />
              </button>
              <button className=" hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out ">
                <CiDeliveryTruck
                  size={24}
                  color="#383e42"
                  className="mx-auto"
                />
              </button>
            </div>
          </div>
        </td>
        <td className="border-r text-center flex items-center justify-center">
          <button className="text-center hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out">
            <AiOutlineEllipsis size={24} className="mx-auto" />
          </button>
        </td>
      </tbody>{' '}
    </>
  );
}

export default OrderLisiting
