import { RxCaretRight } from 'react-icons/rx';
import { BsTag, BsArrowRight } from 'react-icons/bs';
import CartCards from '../../components/Cards/CartCards';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StripeCheckout from 'react-stripe-checkout';
import { useContext, useMemo, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../firebase/config';
import { toast } from 'react-toastify';
import { UserContext } from '../../UserContext';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const userData = useContext(UserContext)

  const [totalAmount , setTotalAmount] = useState(0)

  const collectionRef = collection(database , 'orders')
 
  console.log(userData)
  


const navigate = useNavigate()
 
  //create a collection in the firebase store when user checks out 


 

  const subTotal = () => {
    let total = 0;
    // Calculate total without tax
    products.forEach((item) => (total += item.quantity * item.price));

 return total.toFixed(2);
  };

  const discount = () => {
    const discountPercentage = 0.2;
    const discountAmount = subTotal() * discountPercentage;
    const discountPrice = subTotal() - discountAmount;
    return discountPrice.toFixed(2);
  };
 
 
useMemo(() => {
  const subTotal = products.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const discountPercentage = 0.2;
  const discountAmount = subTotal * discountPercentage;

  const deliveryFee = 15;
  const total = subTotal - discountAmount + deliveryFee;

  setTotalAmount(total.toFixed(2));
}, [products]);

  

const handleToken = async (token) => {
   
  if(!userData){
    toast("Please login to purchase item")
    navigate('/login')

    return
  }
  
  console.log(token);
    alert('You payment is successfull');

    const currentDate = new Date();

    // Get individual date components
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
    const year = currentDate.getFullYear();

    // Format the date as 'MM/DD/YYYY'
    const formattedDate = `${month}/${day}/${year}`;

     try{
  await addDoc(collectionRef, {
    customerId : userData?.userData?.uid , 
    items: products.length,
   
    pricePurchase: totalAmount,
    customer: userData?.userData?.displayName,
    createdAt: formattedDate,
  });
    }catch(error) {
toast.error(error.message)
console.log(error.message)
    }
  };

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
        {products.length === 0 ? (
          <div className="text-center font-satoshi-md m-auto flex justify-center items-center ">
            <h3 className="text-[16px] my-10 opacity-[.5] md:text-[24px]">
              Cart list is empty
            </h3>
          </div>
        ) : (
          <div className="my-5 w-full border p-3 rounded-[20px] md:w-[70%]">
            {products.map((item) => (
              <>
                <CartCards
                  key={item.id}
                  item={item}
                  totalAmount={totalAmount}
                  setTotalAmount={setTotalAmount}
                />
                <hr className="my-3" />
              </>
            ))}
          </div>
        )}

        <div className="my-5 border p-3 rounded-[20px] w-full md:w-[30%]">
          <h2 className="font-satoshi-bold text-[20px] md:text-[24px]">
            Order Summary
          </h2>
          <div className="details mt-4">
            <div className="sub flex items-center justify-between">
              <h4 className="opacity-[.6] md:text-[20px]">Subtotal</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">
                ${subTotal()}
              </h2>
            </div>
            <div className="sub flex items-center justify-between my-4">
              <h4 className="opacity-[.6] md:text-[20px]">Discount (-20%)</h4>
              <h2 className="font-satoshi-bold md:text-[20px] text-[#ff3333]">
                -${discount()}
              </h2>
            </div>
            <div className="sub flex items-center justify-between">
              <h4 className="opacity-[.6] md:text-[20px]">Delivery Fee</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">$15</h2>
            </div>
            <hr className="my-4" />
            <div className="sub flex items-center justify-between">
              <h4 className=" md:text-[20px]">Total</h4>
              <h2 className="font-satoshi-bold md:text-[20px]">
                ${totalAmount}
              </h2>
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
            <StripeCheckout
              stripeKey={import.meta.env.VITE_STRIPE_KEY}
              token={handleToken}
              name="Sho Co"
              description={`Your total is $${totalAmount}`}
              amount={totalAmount} // Convert total amount to cents
              currency="USD"
              shippingAddress
              billingAddress={false}
            >
              <button
             
              className=" flex items-center justify-center gap-5 w-full bg-black text-white py-3 px-4 rounded-[62px] font-satoshi-md">
                Go to Checkout <BsArrowRight />
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
