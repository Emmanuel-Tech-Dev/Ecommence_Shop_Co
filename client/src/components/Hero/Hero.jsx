import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="px-4 bg-[#F2F0F1] md:flex md:justify-between md:px-20">
        <div className="top pt-10 md:w-[80%] md:mt-16">
          <h1 className="heading text-[42px] font-extrabold leading-[38px] md:text-[64px] md:leading-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="py-6 opacity-[60%] font-satoshi md:py-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individual and cater to your sense of
            style{' '}
          </p>
          <button className="text-center w-[100%] py-4 bg-black rounded-[62px] text-white md:w-[210px]">
            Shop Now
          </button>
          <div className="stats flex flex-wrap mt-4 justify-center items-center w-[100%] mx-auto gap-y-5 md:mt-8 md:justify-start">
            <div className="f  px-8 font-satoshi-bold md:pl-[]">
              <h2 className="text-[30px] font-bold ">200+</h2>
              <p className="text-[12px] opacity-[60%]">International Brands</p>
            </div>
            <span className="border border-black/10 h-[50px]"></span>
            <div className="f px-8 font-satoshi-bold">
              <h2 className="text-[30px] font-bold ">2,000+</h2>
              <p className="text-[12px] opacity-[60%]">High-Quality Products</p>
            </div>
            <span className="border border-black/10 h-[50px] hidden md:block"></span>
            <div className="f  px-8 font-satoshi-bold ">
              <h2 className="text-[30px] font-bold ">30,000+</h2>
              <p className="text-[12px]  opacity-[60%]">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="btm w-[100%] hidden md:block">
         
          <img className="w-full hidden md:block" src="./image/hero-img.png" />
        </div>
      </div>
      <div className="btm w-[100%]">
        <img
          className="w-[100%] block md:hidden"
          src="./image/hero-imgMobile.png"
        />
        
      </div>
      {/* Jumbotron Starts  */}
      <div className="bg-black">
        <div className="logos py-8 flex flex-wrap justify-center items-center mx-auto gap-x-10 gap-y-5 md:justify-between md:px-20">
          <img  src="./image/versache.png" />
          <img  src="./image/zara.png" />
          <img  src="./image/gucci.png" />
          <img  src="./image/prada.png" />
          <img  src="./image/cK.png" />
        </div>
      </div>
      {/* Jumbotron Ends  */}
    </div>
  );
};

export default Hero;
