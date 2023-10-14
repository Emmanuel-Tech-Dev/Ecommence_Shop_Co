import {RxCaretRight} from 'react-icons/rx'
import {AiOutlineCheck} from 'react-icons/ai'
import Products from '../../components/Products/Products';

const Product = () => {
  return (
    <>
    <div className="px-4">
      <hr className="mb-4" />
      <div className="links flex gap-x-2 items-center mb-5 text-[14px] ">
        <h5 className="opacity-[.6] cursor-pointer">Home</h5>
        <RxCaretRight />
        <h5 className="opacity-[.6] cursor-pointer">Shop</h5>
        <RxCaretRight />
        <h5 className=" cursor-pointer">T-shirts</h5>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <img
            src="../image/image.png"
            className="w-full h-[400px] object-cover rounded-[20px]"
          />
          <div className="flex justify-between">
            <img
              src="../image/image.png"
              className="w-[110px] h-[110px] object-cover rounded-[20px] border border-black"
            />
            <img
              src="../image/image.png"
              className="w-[110px] h-[110px] object-cover rounded-[20px]"
            />
            <img
              src="../image/image.png"
              className="w-[110px] h-[110px] object-cover rounded-[20px]"
            />
          </div>
        </div>
        <div className="desc mt-8">
          <h3 className="font-integral text-[24px]">
            ONE LIFE GRAPHIC T-SHIRT
          </h3>
          <div className="flex items-center gap-3 my-3">
            <img src="../image/ratings.png" className="h-[18px]" />
            <span className="text-[14px]">4.5/5</span>
          </div>
          <div className="flex items-center gap-4 font-satoshi-bold">
            <h2 className="text-[24px]">$260</h2>
            <h2 className="text-[24px] opacity-[.3] line-through">$300</h2>
            <span className="text-[14px] font-satoshi-md py-1.5 px-3 bg-[#FF333310] text-[#FF3333] rounded-[62px]">
              -40%
            </span>
          </div>
          <p className='my-3 mb-5 text-[14px] opacity-[.6]'>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric. It offers superior comfort and style
          </p>
        </div>
        <hr />
        <div className='mt-5'>
          <h4 className='text-[14px] opacity-[.6]'>Select Colors</h4>
          <div className="colors flex gap-2 mt-3">
            <div className="bg-[#4F4631] flex justify-center items-center">
              <AiOutlineCheck color='white'/>
            </div>
            <div className="bg-[#314F4A]"></div>
            <div className="bg-[#31344F]"></div>
          </div>
        </div>
      </div>

       
    
       
    </div>
      <Products title={'YOU MIGHT ALSO LIKE'}/>
    </>
  );
};

export default Product;
