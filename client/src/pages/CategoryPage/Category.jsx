import  { useState } from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { VscSettings } from 'react-icons/vsc';

import { data } from '../../Data';
import BoxCards from '../../components/Cards/BoxCards';
import FilterModal from '../../components/Modals/FilterModal';

const Category = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="px-4">
        <hr className="mb-4" />
        <div className="links flex gap-x-2 items-center mb-5 text-[14px] ">
          <h5 className="opacity-[.6] cursor-pointer">Home</h5>
          <RxCaretRight />
          <h5 className="opacity-[.6] cursor-pointer">Shop</h5>
        </div>

        <div className="title flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h3 className="text-[24px] font-satoshi-bold">Shop</h3>
            <span className="text-[14px] opacity-[.6]">
              Showing 1 - 10 of 100 Products
            </span>
          </div>
          <div className="w-[35px] h-[35px] rounded-[50px] bg-[#f0f0f0] flex items-center justify-center"
          onClick={handleOpen}
          >
            <VscSettings className='cursor-pointer'/>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-7 mt-10">
          {data.map((item) => (
            <BoxCards item={item} key={item.id} />
          ))}
        </div>
        <hr className="my-5" />

        <div className="flex items-center justify-between font-satoshi-md">
          <div className="left">
            <button className=" py-2 px-3 border rounded-[8px] text-[12px]">
              Previous
            </button>
          </div>
          <div className="left text-[12px] gap-10 flex">
            <button className="bg-[#f0f0f0] px-3 py-1 rounded-[8px]">1</button>
            <button>2</button>
            <button>...</button>
            <button>9</button>
            <button>10</button>
          </div>
          <div className="left">
            <button className=" py-2 px-3 border rounded-[8px] text-[12px]">
              Next
            </button>
          </div>
        </div>
      </div>
     <FilterModal isOpen={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Category;
