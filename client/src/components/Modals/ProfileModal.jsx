import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext"

import { auth } from "../../firebase/config"
import { signOut } from "firebase/auth"
import { toast } from "react-toastify"

// eslint-disable-next-line react/prop-types
const ProfileModal = ({modalOpen , setModalOpen}) => {

 const navigate = useNavigate()
  const {userData , setUserData} = useContext(UserContext)


  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
      toast.success('Log out successful')
      setUserData(null)
      navigate('/login')
      })
      .catch((error) => {
      toast.error(error.message)
      });
  }


  return (
    <div
      className={
        !modalOpen
          ? 'modal absolute right-4 bg-white p-6 rounded-[12px] hidden opacity-0 z-[2] transition-all duration-200 ease-in-out'
          : ' modal absolute right-4 bg-white p-6 rounded-[12px] z-[2] opacity-100 block transition-all duration-200 ease-in-out'
      }
    >
      {userData ? (
        <>
          <h2 className="font-satoshi-bold text-[16px]">My Profile</h2>
          <hr className="mt-3" />
          <ul className="mt-5 text-[14px] flex flex-col gap-3">
            <Link to={'/signup'} onClick={() => setModalOpen(false)}>
              <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
               My Order
              </li>
            </Link>
            <li
            onClick={handleLogout}
            className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
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
            <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">
              My order
            </li>
          </ul>{' '}
        </>
      )}
    </div>
  );
}

export default ProfileModal
