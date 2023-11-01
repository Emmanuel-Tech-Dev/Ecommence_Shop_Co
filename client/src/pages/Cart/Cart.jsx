import React, { useState } from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { BsTag, BsArrowRight } from 'react-icons/bs';
import CartCards from '../../components/Cards/CartCards';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  console.log(products)
  
  return (
    <div className="px-4 md:px-20">
      <hr className="mb-4" />
      <div className="links flex gap-x-2 items-center mb-5 text-[14px] ">
        <Link to={'/'}>
          <h5 className="opacity-[.6] cursor-pointer">Home</h5>
        </Link>

        <RxCaretRight />

        <h5 className=" cursor-pointer">Cart</h5>
      </div>
      <h1 className="text-[32px] md:text-[40px]">My Cart</h1>
      <div className="container flex flex-col items-start md:flex-row md:justify-between md:gap-5">
        <div className="my-5 w-full border p-3 rounded-[20px] md:w-[70%]">
          {products.map((item) => (
            <>
              <CartCards />
              <hr className="my-3" />
            </>
          ))}

          {/* <CartCards />
          <hr className="my-3" />
          <CartCards /> */}
        </div>
        <div className="my-5 border p-3 rounded-[20px] w-full md:w-[30%]">
          <h2 className="font-satoshi-bold text-[20px] md:text-[24px]">
            Order Summary
          </h2>
          <div className="details mt-4">
            <div className="sub flex items-center justify-between">
              <h4 className="opacity-[.6] md:text-[20px]">Subtotal</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">$565</h2>
            </div>
            <div className="sub flex items-center justify-between my-4">
              <h4 className="opacity-[.6] md:text-[20px]">Discount (-20%)</h4>
              <h2 className="font-satoshi-bold md:text-[20px] text-[#ff3333]">
                -$113
              </h2>
            </div>
            <div className="sub flex items-center justify-between">
              <h4 className="opacity-[.6] md:text-[20px]">Delivery Fee</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">$15</h2>
            </div>
            <hr className="my-4" />
            <div className="sub flex items-center justify-between">
              <h4 className=" md:text-[20px]">Total</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">$467</h2>
            </div>
            <form className="my-5 flex items-center justify-between gap-5">
              <div className="bg-[#f0f0f0] w-full rounded-[62px] flex items-center px-4 gap-5">
                <BsTag className="opacity-[.4] text-black" size={24} />
                <input
                  type="email"
                  placeholder="Add promo code"
                  className="bg-transparent py-3 w-full text-black focus:outline-none"
                />
              </div>
              <div>
                <button className=" text-center bg-black text-white py-3 px-4 rounded-[62px] font-satoshi-md">
                  Apply
                </button>
              </div>
            </form>
            <button className=" flex items-center justify-center gap-5 w-full bg-black text-white py-3 px-4 rounded-[62px] font-satoshi-md">
              Go to Checkout <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
