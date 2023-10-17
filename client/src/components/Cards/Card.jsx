import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({item}) => {
  return (
    <div>
      <Link to={'/product/1'}> 
      <img src={item.img} className="rounded-[14px] w-[250px] h-[250px]" />
      <h3 className="text-[20px] font-satoshi-bold mt-4">{item.name}</h3>
      <div className="ratings flex items-center gap-5 my-2">
        <img src="../image/ratings.png" />
        <span className="text-[14px]">{item.ratings}/5</span>
      </div>
      <h2 className="text-[24px] font-satoshi-bold">${item.price}</h2>
      </Link>
     
    </div>
  );
};

export default Card;
