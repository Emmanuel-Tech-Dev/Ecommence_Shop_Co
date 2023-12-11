import {useState} from 'react'

import { RiDeleteBinFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const CartCards = ({item}) => {

    const [quantity, setQuantity] = useState(item.quantity);

console.log(item)
    const dispatch= useDispatch()

    const handleItemDelete = () => {
     dispatch(removeItem(item.id))
     toast.error(`${item.name} removed from cart`)
    }

  return (
    <div>
 
      
       <div className="items flex items-start gap-6">
        <div className="left">
          <img src={item.image} className=" w-[150px]" />
        </div>
        <div className="right w-full">
          <div className="top flex items-center justify-between">
            <h5 className="font-satoshi-bold text-[16px] md:text-[20px]">
            {item.productName}
            </h5>

            <RiDeleteBinFill color="#FF3333" size={20} className='cursor-pointer' 
            onClick={handleItemDelete}
            />
          </div>

          <h6 className="text-[12px] md:text-[14px]">
            Size : <span className="opacity-[.6]">Large</span>
          </h6>
          <h6 className="text-[12px] md:text-[14px]">
            Color : <span className="opacity-[.6]">White</span>
          </h6>
          <div className="btm mt-2 flex items-center justify-between">
            <h3 className="font-satoshi-bold text-[20px] md:text-[24px]">${item.price * quantity}</h3>

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

CartCards.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartCards
