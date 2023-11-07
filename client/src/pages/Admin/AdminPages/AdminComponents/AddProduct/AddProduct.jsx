import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const AddProduct = ({ isAddSlide, setIsAddSlide }) => {
  return (
    <div
      className={
        !isAddSlide
          ? 'div absolute right-[-100%] top-0 w-full bg-black/10 h-full z-[9] overflow-x-hidden transition-all duration-500 ease-in-out '
          : 'div absolute right-[0] top-0 w-full bg-black/10 h-full z-[9] transition-all duration-500 ease-in-out'
      }
    >
      <div className="w-[25rem] bg-white h-full float-right  ">
        <div className="title px-4 my-5 flex items-center justify-between">
          <div>
            <h1 className="text-[20px]">New Product </h1>
            <p>Add new product information</p>
          </div>

          <button
            onClick={() => setIsAddSlide(false)}
            className=" hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out "
          >
            <AiOutlineClose size={20} className="mx-auto" />
          </button>
        </div>

        {/* Form Fields */}
        <form className="px-4 ">
          <div className="space-y-1.5">
            <label htmlFor="name" className="font-satoshi text-[14px]">
              Product Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="product name"
              className="border border-blue-400 w-full rounded py-2 indent-2"
            />
          </div>
          <div className="space-y-1.5 mt-3">
            <label htmlFor="rPrice" className="font-satoshi  text-[14px]">
              Regular Price
            </label>
            <br />
            <input
              type="text"
              id="rPrice"
              placeholder="regular price"
              className="border border-blue-400 w-full rounded py-2 indent-2"
            />
          </div>

          <div className="space-y-1.5 mt-3">
            <label htmlFor="sPrice" className="font-satoshi  text-[14px]">
              Stock Price
            </label>
            <br />
            <input
              type="text"
              id="sPrice"
              placeholder="stock price"
              className="border border-blue-400 w-full rounded py-2 indent-2"
            />
          </div>
          
           <div className="space-y-1.5 mt-5">
           
          
            <textarea
              type="text"
              id="sPrice"
              placeholder="Product Description"
              className="border border-blue-400 w-full rounded py-2 indent-2 h-[100px]"
            />
          </div>
          <div className="space-y-1.5 mt-4">
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file" className="font-satoshi  text-[14px] cursor-pointer">
              <div className=" h-[100px] w-full bg-[#eef3f7] rounded flex items-center justify-center">
                <span className='text-[#92a3ae]'>Add image file</span>
              </div>
            </label>
          </div>

          <button className='mt-3 text-center w-full py-2 bg-blue-400 rounded text-white'>
            Add New Product 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
