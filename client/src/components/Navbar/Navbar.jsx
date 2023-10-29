import { useContext, useEffect, useState } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import {
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProfileModal from '../Modals/ProfileModal';
import { UserContext } from '../../UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { useDispatch } from 'react-redux';

import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { userData, setUserData } = useContext(UserContext);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
       
     dispatch(SET_ACTIVE_USER({
        email : user.email,
        userName : user.displayName,
         userId: user.uid,
     }))

      } else {
        setUserData('');
      }
    });
  }, []);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div className="uphead bg-black text-white text-center py-[9px] font-satoshi text-[12px]">
        Sign up and get 20% off to your first order.{' '}
        <span className="underline">Sign Up Now</span>
      </div>
      <nav className="px-4 flex justify-between items-center  h-[10vh] md:px-20">
        <div className="left flex items-center gap-x-4 ">
          <div className="block md:hidden">
            {!navOpen ? (
              <FiMenu onClick={handleNavOpen} size={24} />
            ) : (
              <AiOutlineClose onClick={handleNavOpen} size={24} />
            )}
          </div>
          <Link to={'/'}>
            <img
              src="../image/logo.png"
              alt="logo"
              className="w-[160px] h-[22px]"
            />
          </Link>

          <div>
            <ul className=" hidden md:block md:flex  font-satoshi">
              <li className=" cursor-pointer  py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                Shop
              </li>
              <li className=" cursor-pointer py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                On Sale
              </li>
              <li className=" cursor-pointer py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                New Arrivals
              </li>
              <li className=" cursor-pointer py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                Brands
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex items-center gap-x-4">
          <div className="bg-[#F0F0F0] rounded-[62px] hidden px-4 gap-5 md:w-[700px] md:flex md:items-center">
            <FiSearch className="opacity-[.4] text-black" size={24} />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent py-3 w-full text-black focus:outline-none"
            />
          </div>
          <FiSearch size={24} className="block md:hidden" />
          <Link to={'/cart'}>
            <FiShoppingCart size={24} />
          </Link>
          {userData ? (
            <div
              className="colors rounded-[50px] border border-[#5daf5d] bg-[#e7f8e7] cursor-pointer"
              onClick={handleModalOpen}
            >
              <div className="flex items-center justify-center font-satoshi-md">
                {' '}
                {userData?.displayName ? userData.displayName[0] : ''}
              </div>
            </div>
          ) : (
            <>
              <FiUser
                size={24}
                onClick={handleModalOpen}
                className="cursor-pointer"
              />
            </>
          )}
        </div>
      </nav>

      <div
        className={
          !navOpen
            ? 'div h-[85vh] bg-black/50 absolute w-[100%] z-[999] left-[-100%]  transition-all duration-300 ease-in-out'
            : 'div h-[85vh] bg-black/50 absolute w-[100%] left-[0] z-[999] transition-all duration-300 ease-in-out'
        }
        onClick={() => setNavOpen(false)}
      >
        <div className="do w-[80%]  h-[100%] bg-white">
          <ul className="navlinks font-satoshi">
            <Link to={'/categories/1'}>
              <li className=" py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                Shop
              </li>
            </Link>

            <li className="py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
              On Sale
            </li>
            <li className="py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
              New Arrivals
            </li>
            <li className="py-4 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out">
              Brands
            </li>
            <li></li>
          </ul>

          <div className="socials mt-24 font-satoshi">
            <h4 className="text-center font-[700] text-[18px] mb-5 font-integral">
              Socials
            </h4>
            <div className="social flex justify-center items-center gap-x-6">
              <div className="i w-[32px] h-[32px] bg-blue-100 cursor-pointer flex items-center justify-center rounded-[50px]">
                <AiOutlineTwitter size={24} />
              </div>
              <div className="i w-[32px] h-[32px] bg-blue-100 cursor-pointer flex items-center justify-center rounded-[50px]">
                <AiFillInstagram size={24} />
              </div>
              <div className="i w-[32px] h-[32px] bg-blue-100 cursor-pointer flex items-center justify-center rounded-[50px]">
                <AiFillFacebook size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default Navbar;
