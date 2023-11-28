import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { LuEye } from 'react-icons/lu';
import { database } from '../../../../../firebase/config';
import { doc, getDoc,  } from 'firebase/firestore';

const ViewProduct = ({viewModal , setViewModal , selectedProductId}) => {
    
  const [product , setProduct] = useState()

   useEffect(() => {
     const fetchProduct = async () => {
       if (selectedProductId) {
          try {
            const productDoc = await getDoc(
              doc(database, 'products', selectedProductId)
            );
            if (productDoc.exists()) {
              setProduct(productDoc.data());
             
            } else {
              console.error('Product not found');
            }
          } catch (error) {
            console.error('Error fetching product:', error.message);
          }
       }
     };

     fetchProduct();
   }, [selectedProductId]);

   

  return (
    <> {viewModal && 
      
      <div className= "absolute w-full h-full bg-black/5 right-[0] top-[0]">
      <div className="mx-auto mt-[50px] w-[600px] p-5 bg-white h-[500px] rounded">
        <div className='flex justify-between items- my-6'>
          <h1 className='text-[20px]'>{product?.productName}</h1>
          <span 
          onClick={() => setViewModal(false)}
          className="w-[30px] h-[30px] flex items-center justify-center rounded-[50px] hover:bg-[#eef3f7] transition-all duration-300 ease-in-out">
            <AiOutlineClose />
          </span>
        </div>
        <div className='flex items-start gap-10'>
          <div className='w-[40%]'>
                <img className='w-[400px] h-[230px]' src={product.imageUrl} alt='image' />
                <img className='my-4 mx-auto' src='../image/ratings.png'/>
          </div>
          <div className='w-[50%]'>
            <p>{product.proDescription}</p>
          </div>
         </div>
         <hr/>
         <div className='flex justify-between items-center my-10'>
          <div>
            <h1>Regular Price</h1>
            <span className='font-satoshi-md text-[18px]'>${product.regPrice}</span>
          </div>
           <div>
            <h1>Stock Price</h1>
            <span className='font-satoshi-md text-[18px]'>${product.stockPrice}</span>
          </div>
         </div>
      </div>
    </div>
    }
    </>
   
    
  
  );
};

export default ViewProduct;
