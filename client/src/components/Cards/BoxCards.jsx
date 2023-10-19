import React from 'react'
import { Link } from 'react-router-dom';

const BoxCards = ({item}) => {
  return (
    <>
      <Link to={'/product/1'}>
        <img src={item.img} className="rounded-[14px] w-[160px] h-[160px]" />
        <h3 className="text-[16px] font-satoshi-bold mt-2">{item.name.slice(0 , 20)}...</h3>
        <div className="ratings flex items-center gap-5 my-2">
          <img src="../image/ratings.png" className='h-[15px]' />
          <span className="text-[14px]">{item.ratings}/5</span>
        </div>
        <h2 className="text-[20px] font-satoshi-bold">${item.price}</h2>
      </Link>
    </>
  );
}

export default BoxCards
 