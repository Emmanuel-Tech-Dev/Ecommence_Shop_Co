import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const ProfileModal = ({modalOpen , setModalOpen}) => {
  return (
    <div className={!modalOpen ?  "modal absolute right-4 bg-white p-6 rounded-[12px] hidden opacity-0 z-[2] transition-all duration-200 ease-in-out" : 
   " modal absolute right-4 bg-white p-6 rounded-[12px] z-[2] opacity-100 block transition-all duration-200 ease-in-out"
    }>
     <h2 className="font-satoshi-bold text-[16px]">My Profile</h2>
     <hr className="mt-3"/>
       <ul className="mt-5 text-[14px] flex flex-col gap-3">
        <Link to={'/signup'} onClick={() => setModalOpen(false)}>
             <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">Create an account</li>
        </Link>
         <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out ">My order</li> 
       </ul>
    
    </div>
  )
}

export default ProfileModal
