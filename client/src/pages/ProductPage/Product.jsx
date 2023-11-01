/* eslint-disable react/no-unescaped-entities */
import { RxCaretRight } from 'react-icons/rx';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { VscSettings } from 'react-icons/vsc';
import Products from '../../components/Products/Products';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { data } from '../../Data';

const Product = () => {

     const iNum = useParams().id;

     console.log(iNum);


  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('image');

  const [checkedColor, setCheckedColor] = useState('#4F4631');

  const [checkedSize, setCheckedSize] = useState('medium');

  const toggleColor = (color) => {
    setCheckedColor(color === checkedColor ? null : color);
  };

  const toggleSize = (size) => {
    setCheckedSize(size === checkedSize ? null : size);
  };

  const handleAddToCart = () => {
     dispatch(
       addToCart({
         id: data.iNum,
         name: data.name,
         price: data.price,
         image: data.img,
         quantity,
       })
     );
  }


  return (
    <>
      <div className="px-4 md:px-20">
        <hr className="mb-4" />
        <div className="links flex gap-x-2 items-center mb-5 text-[14px] ">
         <Link to={'/'}>
          <h5 className="opacity-[.6] cursor-pointer">Home</h5>
         </Link>

         
          <RxCaretRight />
          <h5 className="opacity-[.6] cursor-pointer">Shop</h5>
          <RxCaretRight />
          <h5 className=" cursor-pointer">T-shirts</h5>
        </div>
        <div className="">
          <div className="md:flex md:items-center md:justify-between md:gap-10 md:mb-8">
            <div className="flex flex-col gap-5 md:flex-row-reverse md:w-[50%]">
              <img
                src={data.img}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-[20px]"
              />
              <div className="flex justify-between md:flex-col">
                <img
                  src={'../image/image 8.png'}
                  className={
                    activeImage === 'image 8'
                      ? 'w-[110px] h-[110px] object-cover rounded-[20px] border border-black'
                      : 'w-[110px] h-[110px] object-cover rounded-[20px] '
                  }
                  onClick={() => setActiveImage('image 8')}
                />
                <img
                  src="../image/image 7.png"
                  className={
                    activeImage === 'image 7'
                      ? 'w-[110px] h-[110px] object-cover rounded-[20px] border border-black'
                      : 'w-[110px] h-[110px] object-cover rounded-[20px] '
                  }
                  onClick={() => setActiveImage('image 7')}
                />
                <img
                  src="../image/image 9.png"
                  className={
                    activeImage === 'image 9'
                      ? 'w-[110px] h-[110px] object-cover rounded-[20px] border border-black'
                      : 'w-[110px] h-[110px] object-cover rounded-[20px] '
                  }
                  onClick={() => setActiveImage('image 9')}
                />
              </div>
            </div>
            <div className="container md:w-[50%]">
              <div className="desc mt-8">
                <h3 className="font-integral text-[24px] md:text-[40px]">
                  ONE LIFE GRAPHIC T-SHIRT
                </h3>
                <div className="flex items-center gap-3 my-3">
                  <img src="../image/ratings.png" className="h-[18px]" />
                  <span className="text-[14px]">4.5/5</span>
                </div>
                <div className="flex items-center gap-4 font-satoshi-bold">
                  <h2 className="text-[24px] md:text-[32px]">$260</h2>
                  <h2 className="text-[24px] md:text-[32px] opacity-[.3] line-through">
                    $300
                  </h2>
                  <span className="text-[14px] font-satoshi-md py-1.5 px-3 bg-[#FF333310] text-[#FF3333] rounded-[62px]">
                    -40%
                  </span>
                </div>
                <p className="my-3 mb-5 text-[14px] opacity-[.6] md:text-[16px]">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric. It offers superior
                  comfort and style
                </p>
              </div>
              <hr />
              <div className="my-5">
                <h4 className="text-[14px] opacity-[.6] md:text-[16px]">
                  Select Colors
                </h4>
                <div className="colors flex gap-2 mt-3">
                  <div
                    className={`bg-[#4F4631] flex justify-center items-center ${
                      checkedColor === '#4F4631' ? '' : 'checked'
                    }`}
                    onClick={() => toggleColor('#4F4631')}
                  >
                    {checkedColor === '#4F4631' && (
                      <AiOutlineCheck color="white" />
                    )}
                  </div>
                  <div
                    className={`bg-[#314F4A] flex justify-center items-center  ${
                      checkedColor === '#314F4A' ? 'checked' : ''
                    }`}
                    onClick={() => toggleColor('#314F4A')}
                  >
                    {checkedColor === '#314F4A' && (
                      <AiOutlineCheck color="white" />
                    )}
                  </div>
                  <div
                    className={`bg-[#31344F] flex justify-center items-center ${
                      checkedColor === '#31344F' ? 'checked' : ''
                    }`}
                    onClick={() => toggleColor('#31344F')}
                  >
                    {checkedColor === '#31344F' && (
                      <AiOutlineCheck color="white" />
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <div className="my-5">
                <h4 className="text-[14px] opacity-[.6] md:text-[16px]">
                  Choose Size
                </h4>
                <div className="flex gap-2 mt-3 font-satoshi">
                  <div
                    className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                      checkedSize === 'small'
                        ? 'checked bg-black text-white'
                        : ''
                    }`}
                    onClick={() => toggleSize('small')}
                  >
                    <span className="text-[14px] opacity-[.6]">Small</span>
                  </div>
                  <div
                    className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                      checkedSize === 'medium'
                        ? 'checked bg-black text-white'
                        : ''
                    }`}
                    onClick={() => toggleSize('medium')}
                  >
                    <span className="text-[14px] opacity-[.6]">Medium</span>
                  </div>
                  <div
                    className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                      checkedSize === 'large'
                        ? 'checked bg-black text-white'
                        : ''
                    }`}
                    onClick={() => toggleSize('large')}
                  >
                    <span className="text-[14px] opacity-[.6]">Large</span>
                  </div>
                  <div
                    className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                      checkedSize === 'xlarge'
                        ? 'checked bg-black text-white'
                        : ''
                    }`}
                    onClick={() => toggleSize('xlarge')}
                  >
                    <span className="text-[14px] opacity-[.6]">X-Large</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="my-5">
                <div className=" flex gap-5 mt-3">
                  <div className="bg-[#F0F0F0] py-3 px-4  flex items-center gap-4 rounded-[62px] ">
                    <AiOutlineMinus
                      size={20}
                      className="cursor-pointer"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    />
                    <span className="text-[14px] font-satoshi-md">
                      {quantity}
                    </span>
                    <AiOutlinePlus
                      size={20}
                      className="cursor-pointer"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    />
                  </div>
                  <button
                  onClick={handleAddToCart()}
                  className="bg-[#000000] text-white w-full rounded-[62px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs pt-2">
            <div className="tabs-container border-b py-4 flex justify-between items-center relative">
              <button>Product Details</button>
              <button className="active font-satoshi-bold">
                Ratings & Reviews
              </button>
              <button>FAQs</button>
            </div>

            <div className="ratings my-5">
              <div className="flex items-center justify-between">
                <h2 className="font-satoshi-bold text-5">
                  All Reviews
                  <span className="font-satoshi text-[14px] opacity-[.6] ml-1">
                    (451)
                  </span>
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-[50px] h-[35px] rounded-[50px] bg-[#f0f0f0] flex items-center justify-center">
                    <VscSettings />
                  </div>

                  <button className="bg-[#000000] text-white text-[12px] py-2 px-3 w-full rounded-[62px]">
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="reviews mt-5 pb-5 flex  flex-col md:flex-row gap-5">
                <div className="border rounded-[20px] p-6">
                  <img src="../image/ratings.png" className="w-[100px]" />
                  <h2 className="text-[12px] font-satoshi-bold py-1">
                    Samantha D.
                  </h2>
                  <p className="text-[14px] opacity-[.6] mb-3">
                    "I abosulety love this t-shirt! The design is unique and the
                    fabric feels so comfotable. As a fellow designer I
                    appreciate the attention to detail it's become my favourite
                    go-to shirt "
                  </p>
                  <span className="font-satoshi-md opacity-[.6]">
                    Posted on August 14, 2023{' '}
                  </span>
                </div>
                <div className="border rounded-[20px] p-6">
                  <img src="../image/ratings.png" className="w-[100px]" />
                  <h2 className="text-[12px] font-satoshi-bold py-1">
                    Samantha D.
                  </h2>
                  <p className="text-[14px] opacity-[.6] mb-3">
                    "I abosulety love this t-shirt! The design is unique and the
                    fabric feels so comfotable. As a fellow designer I
                    appreciate the attention to detail it's become my favourite
                    go-to shirt "
                  </p>
                  <span className="font-satoshi-md opacity-[.6]">
                    Posted on August 14, 2023{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products title={'YOU MIGHT ALSO LIKE'} />
    </>
  );
};

export default Product;
