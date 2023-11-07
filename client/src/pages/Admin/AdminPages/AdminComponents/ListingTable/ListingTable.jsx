import React from 'react'
import {AiOutlineEllipsis} from 'react-icons/ai'


const ListingTable = () => {
  return (
    <>
     
        <br></br>
        <tbody className="bg-white text-[#788791] font-satoshi ">
          <td className="border-r">
            <input type="checkbox" />
          </td>
          <td className="border-r flex items-center gap-2 ">
            <img src="../image/image 8.png" className="w-[30px]" />
            Checkered T-Shirt
          </td>
          <td className="border-r text-black font-satoshi-md">$300</td>
          <td className="border-r">12</td>
          <td className="border-r text-center flex items-center justify-center">
            <button className="text-center hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out">
              <AiOutlineEllipsis size={24} className='mx-auto' />
            </button>
          </td>
        </tbody>
     
    </>
  );
}

export default ListingTable
