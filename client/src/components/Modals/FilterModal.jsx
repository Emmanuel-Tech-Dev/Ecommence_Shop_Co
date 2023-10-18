import { useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const FilterModal = ({ isOpen, setOpenModal }) => {

 const [checkedColor, setCheckedColor] = useState('#063AF5');

  const [checkedSize, setCheckedSize] = useState('medium');

  const toggleSize = (size) => {
    setCheckedSize(size === checkedSize ? null : size);
  };

const toggleColor = (color) => {
  setCheckedColor(color === checkedColor ? null : color);
};

  return (
    <div
      className={`fixed bottom-0 z-[1] inset-x-0 h-[100vh] bg-black/25  transform transition-transform ease-in-out duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="filters bg-white  h-[85dvh] absolute w-full bottom-0 rounded-tl-[20px] rounded-tr-[20px] px-4 overflow-y-scroll">
        {/* Content inside the white div */}
        <div className="content py-4">
          <div className="head sticky top-0  py-4 bg-white z-[3]">
            <div className="flex items-center justify-between bg-white">
              <h3 className="font-satoshi-bold text-[20px]">Filters</h3>
              <AiOutlineClose
                onClick={() => setOpenModal(false)}
                className="cursor-pointer opacity-40"
              />
            </div>
            <hr className="my-5" />
          </div>

          <div className="">
            <div>
              <ul className="space-y-3 opacity-60">
                <li className="cursor-pointer">T-shirts</li>
                <li className="cursor-pointer">Shorts</li>
                <li className="cursor-pointer">Shirts</li>
                <li className="cursor-pointer">Hoodie</li>
                <li className="cursor-pointer">Jeans</li>
              </ul>
            </div>
            <hr className="my-5" />
            <form>
              <label className="font-satoshi-bold text-[20px] ">Price</label>
              <input type="range" min={0} max={100} className="w-full mt-2 " />
            </form>
            <hr className="my-5" />

            <div>
              <h3 className="font-satoshi-bold text-[20px]">Color</h3>
              <div className="colors flex flex-wrap gap-5 mt-3">
                <div
                  className={`bg-[#00c12b] flex justify-center items-center ${
                    checkedColor === '#00c12b' ? '' : 'checked'
                  }`}
                  onClick={() => toggleColor('#00c12b')}
                >
                  {checkedColor === '#00c12b' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#F50606] flex justify-center items-center  ${
                    checkedColor === '#F50606' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#F50606')}
                >
                  {checkedColor === '#F50606' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#F5DD06] flex justify-center items-center ${
                    checkedColor === '#F5DD06' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#F5DD06')}
                >
                  {checkedColor === '#F5DD06' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>

                <div
                  className={`bg-[#F57906] flex justify-center items-center ${
                    checkedColor === '#F57906' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#F57906')}
                >
                  {checkedColor === '#F57906' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#06CAF5] flex justify-center items-center ${
                    checkedColor === '#06CAF5' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#06CAF5')}
                >
                  {checkedColor === '#06CAF5' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#063AF5] flex justify-center items-center ${
                    checkedColor === '#063AF5' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#063AF5')}
                >
                  {checkedColor === '#063AF5' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#7D06F5] flex justify-center items-center ${
                    checkedColor === '#7D06F5' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#7D06F5')}
                >
                  {checkedColor === '#7D06F5' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#F506A4] flex justify-center items-center ${
                    checkedColor === '#F506A4' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#F506A4')}
                >
                  {checkedColor === '#F506A4' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
                <div
                  className={`bg-[#FFFFFF] flex border-2 justify-center items-center ${
                    checkedColor === '#FFFFFF' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#FFFFFF')}
                >
                  {checkedColor === '#FFFFFF' && (
                    <AiOutlineCheck color="black" />
                  )}
                </div>
                <div
                  className={`bg-[#000000] flex justify-center items-center ${
                    checkedColor === '#000000' ? 'checked' : ''
                  }`}
                  onClick={() => toggleColor('#000000')}
                >
                  {checkedColor === '#000000' && (
                    <AiOutlineCheck color="white" />
                  )}
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <h3 className="font-satoshi-bold text-[20px]">Size</h3>

              <div className="flex flex-wrap gap-5 mt-3 font-satoshi">
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === 'xxsmall'
                      ? 'checked bg-black text-white'
                      : ''
                  }`}
                  onClick={() => toggleSize('xxsmall')}
                >
                  <span className="text-[14px] opacity-[.6]">XX-Small</span>
                </div>{' '}
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === 'xsmall'
                      ? 'checked bg-black text-white'
                      : ''
                  }`}
                  onClick={() => toggleSize('xsmall')}
                >
                  <span className="text-[14px] opacity-[.6]">X-Small</span>
                </div>{' '}
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === 'small' ? 'checked bg-black text-white' : ''
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
                    checkedSize === 'large' ? 'checked bg-black text-white' : ''
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
                </div>{' '}
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === 'xxlarge'
                      ? 'checked bg-black text-white'
                      : ''
                  }`}
                  onClick={() => toggleSize('xxlarge')}
                >
                  <span className="text-[14px] opacity-[.6]">XX-Large</span>
                </div>{' '}
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === '3xlarge'
                      ? 'checked bg-black text-white'
                      : ''
                  }`}
                  onClick={() => toggleSize('3xlarge')}
                >
                  <span className="text-[14px] opacity-[.6]">3X-Large</span>
                </div>{' '}
                <div
                  className={`bg-[#F0F0F0] py-2 px-5 rounded-[62px] cursor-pointer ${
                    checkedSize === '4xlarge'
                      ? 'checked bg-black text-white'
                      : ''
                  }`}
                  onClick={() => toggleSize('4xlarge')}
                >
                  <span className="text-[14px] opacity-[.6]">4X-Large</span>
                </div>
              </div>

              <hr className="my-5" />

              <div>
                <h3 className="font-satoshi-bold text-[20px] mb-3">
                  Dressing Style
                </h3>
                <ul className="space-y-3 opacity-60">
                  <li className="cursor-pointer">Casual</li>
                  <li className="cursor-pointer">Formal</li>
                  <li className="cursor-pointer">Party</li>
                  <li className="cursor-pointer">Gym</li>
                </ul>
              </div>

              <button className="bg-black text-white w-full text-center rounded-[62px] py-3 mt-5 mb-10">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
