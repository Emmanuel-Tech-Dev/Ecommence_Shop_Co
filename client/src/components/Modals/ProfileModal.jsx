

const ProfileModal = () => {
  return (
    <div className="modal absolute right-4 bg-white p-6 rounded-[12px] z-[2]">
     <h2 className="font-satoshi-bold text-[16px]">My Profile</h2>
     <hr className="mt-3"/>
       <ul className="mt-5 text-[14px] flex flex-col gap-3">
        <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out py-1 px-2">Create an account</li>
        <li className="cursor-pointer hover:opacity-[1] opacity-[.6] transition-all duration-300 ease-in-out py-1 px-2">My order</li> 
       </ul>
    
    </div>
  )
}

export default ProfileModal
