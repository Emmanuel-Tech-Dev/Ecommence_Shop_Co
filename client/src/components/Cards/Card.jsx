import React from 'react';

const Card = ({item}) => {
  return (
    <div>
      <img src={item.img} className="rounded-[14px] w-[250px] h-[250px]" />
      <h3 className="text-[20px] font-satoshi-bold mt-4">{item.name}</h3>
      <div className="ratings flex item-center gap-5 my-2">
        <img src="./image/ratings.png" />
        <span className='text-[14px]'>{item.ratings}/5</span>
      </div>
      <h2 className='text-[24px] font-satoshi-bold'>${item.price}</h2>
    </div>
  );
};

export default Card;
