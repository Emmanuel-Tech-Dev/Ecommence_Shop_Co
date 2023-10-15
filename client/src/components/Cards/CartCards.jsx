import React , {useState} from 'react'

import { RiDeleteBinFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const CartCards = () => {

    const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div className="items flex items-start gap-6">
        <div className="left">
          <img src="../image/image 7.png" className=" w-[150px]" />
        </div>
        <div className="right w-full">
          <div className="top flex items-center justify-between">
            <h5 className="font-satoshi-bold text-[16px] md:text-[20px]">
              Black Graphic T-shirt
            </h5>

            <RiDeleteBinFill color="#FF3333" size={20} />
          </div>

          <h6 className="text-[12px] md:text-[14px]">
            Size : <span className="opacity-[.6]">Large</span>
          </h6>
          <h6 className="text-[12px] md:text-[14px]">
            Color : <span className="opacity-[.6]">White</span>
          </h6>
          <div className="btm mt-2 flex items-center justify-between">
            <h3 className="font-satoshi-bold text-[20px] md:text-[24px]">$140</h3>

            <div className="bg-[#F0F0F0] py-2 px-4  flex items-center gap-4 rounded-[62px] ">
              <AiOutlineMinus
                size={16}
                className="cursor-pointer"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              />
              <span className="text-[14px] font-satoshi-md">{quantity}</span>
              <AiOutlinePlus
                size={16}
                className="cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCards
