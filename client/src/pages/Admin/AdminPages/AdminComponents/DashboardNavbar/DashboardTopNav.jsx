
import {FiMenu, FiSearch,  FiUser } from 'react-icons/fi';
import {IoNotificationsSharp} from 'react-icons/io5'
const DashboardTopNav = () => {
  return (
    <div className="Top-Nav h-[10vh]  px-8  ">
      <div className="h-full flex justify-between items-center">
        <div className="left flex items-center gap-5">
          <div className="kebab">
            <FiMenu />
          </div>
          <h1>Welcome User </h1>
        </div>
        <div className="right flex items-center gap-6">
          <form className="flex items-center gap-3">
            <input type="search" placeholder='Search for products...'
             className="bg-gray-100 p-2 rounded-[62px] indent-2 focus:outline-none w-[500px] placeholder:text-[14px]" />
          <button>
            <FiSearch size={20} />
            </button>  
          </form>

          <IoNotificationsSharp size={20} />
          <div className="flex items-center gap-4">
            <div className=" bg-green-200 h-[35px] flex items-center justify-center w-[35px] rounded-[50px]">
              <FiUser size={20} />
            </div>
            <div>
              <span className='text-[12px] font-satoshi-md text-gray-400'>Administrator</span>
              <h4 className='text-[14px] font-satoshi-bold'>User Admin Name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNav;
