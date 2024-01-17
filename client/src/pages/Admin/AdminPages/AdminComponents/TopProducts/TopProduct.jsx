
import {FiShoppingBag} from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi';
import {PiCube} from 'react-icons/pi'
import {GoPeople} from 'react-icons/go'
import useFetchAllData from '../../../../../GeneraFetch';

const Traffic = () => {


 const products = useFetchAllData('products')
 const orders = useFetchAllData('orders')

  const filterProducts = products.slice().reverse().slice(0, 5);
   


  return (
    <div className="flex justify-between items-center mb-10">
      <div className="box-3 border p-6">
        <div className="title mb-6">
          <h3 className="font-satoshi-bold text-[17px]">Top Products</h3>
        </div>
        {filterProducts.map((item) => (
          <div className=" my-6" key={item.id}>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-5 font-satoshi">
                <img src={item.imageUrl} className="w-[50px]" />
                <div>
                  <h4 className="font-satoshi-md ">{item.productName}</h4>
                  <span className="text-[#788791]">${item.regPrice}.00</span>
                </div>
              </div>

              <div>
                <h4 className="font-satoshi-md">${item.regPrice}</h4>
                <span className="text-[#788791] float-right">20 sold</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-3 border p-6">
        <div className="title mb-8">
          <h3 className="font-satoshi-bold text-[17px]">Store Statistics</h3>
        </div>

        <div className=" my-8">
          <div className=" flex justify-between items-center">
            <div className="font-satoshi">
              <div>
                <span className="text-[#788791] text-[14px]">Orders</span>
                <h4 className="font-satoshi-bold text-[20px]">{orders.length}</h4>
              </div>
            </div>

            <div className="bg-green-50 p-3 rounded">
              <FiShoppingBag size={24} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className=" my-8">
          <div className=" flex justify-between items-center">
            <div className="font-satoshi">
              <div>
                <span className="text-[#788791] text-[14px]">Customers</span>
                <h4 className="font-satoshi-bold text-[20px]">200</h4>
              </div>
            </div>
 <div className="bg-blue-50 p-3 rounded">
              <GoPeople size={24} className="text-blue-500" />
            </div>
           
          </div>
        </div>

        <div className=" my-8">
          <div className=" flex justify-between items-center">
            <div className="font-satoshi">
              <div>
                <span className="text-[#788791] text-[14px]">Products</span>
                <h4 className="font-satoshi-bold text-[20px]">
                  {products.length}
                </h4>
              </div>
            </div>

            <div className="bg-orange-50 p-3 rounded">
              <PiCube size={24} className="text-orange-500" />
            </div>
          </div>
        </div>

        <div className=" my-8">
          <div className=" flex justify-between items-center">
            <div className="font-satoshi">
              <div>
                <span className="text-[#788791] text-[14px]">Category</span>
                <h4 className="font-satoshi-bold text-[20px]">6</h4>
              </div>
            </div>

            <div className="bg-violet-50 p-3 rounded">
              <BiCategoryAlt size={24} className="text-violet-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
