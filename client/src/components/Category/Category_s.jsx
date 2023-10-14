import React from 'react'
import {Link} from 'react-router-dom'
const Category_s = () => {
  return (
    <div className="px-4 mt-10 md:px-20">
      <div className=" bg-[#F2F0F1] rounded-[20px]">
        <h1 className="upercase pt-10 text-center text-[32px] leading-[38px] md:text-[48px]">
          Browse By Dress Style
        </h1>
        <div className="cards flex flex-col gap-5 items-center py-6 px-6 md:flex-row md:flex-wrap md:px-16 md:justify-center md:py-10">
          <Link to={'categories/1'}>
             <div className="top">
            <h2 className="title font-satoshi-bold">Casual</h2>
            <img
              src="./image/Frame 61.png"
              className="w-[390px] h-[230px]  md:w-[407px] md:h-[289px]"
            />
          </div>
          </Link>
         
          <Link to={'categories/1'}>
             <div className="top">
            <h2 className="title font-satoshi-bold">Formal</h2>
            <img
              src="./image/Frame 62.png"
              className="w-[390px] h-[230px]  md:w-[684px]  md:h-[289px]"
            />
          </div>
          </Link>
         
          <Link to={'categories/1'}>
             <div className="top">
            <h2 className="title font-satoshi-bold">Party</h2>
            <img
              src="./image/Frame 64.png"
              className="w-[390px] h-[230px]  md:w-[684px]  md:h-[289px]"
            />
          </div>
          </Link>
         
          <Link to={'categories/1'}>
            <div className="top">
            <h2 className="title font-satoshi-bold">Gym</h2>
            <img
              src="./image/Frame 63.png"
              className="w-[390px] h-[230px]  md:w-[407px]  md:h-[289px]"
            />
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Category_s
