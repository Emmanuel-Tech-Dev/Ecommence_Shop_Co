import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/prop-types
const ProfileModal = ({ modalOpen, setModalOpen }) => {
  const navigate = useNavigate();
  const { userData, setUserData, isLoading, setIsLoading } =
    useContext(UserContext);

  const handleLogout = async () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        toast.success('Log out successful');
        setUserData(null);
        setIsLoading(false);
        setModalOpen(false);
        navigate('/login');
      })
      .catch((error) => {
        setIsLoading(true);
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div
        className={
          !modalOpen
            ? 'modal absolute right-4 bg-white w-[280px] p-6 rounded-[12px] hidden opacity-0 z-[2] transition-all duration-200 ease-in-out'
            : ' modal absolute right-4 bg-white w-[280px] p-6 rounded-[12px] z-[2] opacity-100 block transition-all duration-200 ease-in-out'
        }
      >
        {userData ? (
          <>
            <div className="rounded-[50px] border flex items-center justify-center -mt-2  border-[#5daf5d] bg-[#e7f8e7] cursor-pointer">
              <div className="flex items-center justify-center text-[12px] font-satoshi-md">
                {userData?.email}
              </div>
            </div>
            <div className="my-3 mt-5">
              <div className="colors rounded-[50px] w-[50px] h-[50px] mx-auto border flex justify-center items-center border-[#5daf5d] bg-[#e7f8e7] cursor-pointer">
                <div className="flex items-center justify-center font-satoshi-md">
                  {' '}
                  {userData?.displayName ? userData.displayName[0] : ''}
                </div>
              </div>
            </div>
            <h2 className="font-satoshi-bold text-center text-[16px]">
              Hi, {userData?.displayName}
            </h2>
            <hr className="mt-3" />
            <ul className="mt-5 text-[14px] flex flex-col gap-3">
              <Link to={'/signup'} onClick={() => setModalOpen(false)}>
                <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
                  My Order
                </li>
              </Link>
              <li
                onClick={handleLogout}
                className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out "
              >
                Log out
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-satoshi-bold text-[16px]">My Profile</h2>
            <hr className="mt-3" />
            <ul className="mt-5 text-[14px] flex flex-col gap-3">
              <Link to={'/signup'} onClick={() => setModalOpen(false)}>
                <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
                  Create an account
                </li>
              </Link>
              <Link to={'/login'} onClick={() => setModalOpen(false)}>
                <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
                  Log in
                </li>
              </Link>
            </ul>{' '}
          </>
        )}
      </div>
    </>
  );
};

export default ProfileModal;
