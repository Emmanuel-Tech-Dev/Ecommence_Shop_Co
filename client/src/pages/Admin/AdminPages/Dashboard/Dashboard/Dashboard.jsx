import { HiArrowLongUp } from 'react-icons/hi2';
import Table from '../../AdminComponents/DashTable/Table';
import TopProduct from '../../AdminComponents/TopProducts/TopProduct';

const Dashboard = () => {
  return (
    <div className="Dashboard px-8 my-5">
      <div className="header my-10">
        <h1 className="text-[24px]">Dashboard</h1>
      </div>
      <div className="top flex gap-10 items-center ">
        <div className="box bg-green-400 border"></div>
        <div className="box bg-white border"></div>
        <div className="mid-box gap-10 flex flex-col items-center">
          <div className="box-2 border">
            <div className="top flex items-center justify-between px-4 py-2">
              <div>
                <h3 className="font-satoshi-md text-[18px]">Orders</h3>
                <h2 className="font-satoshi-md text-[32px]">250</h2>
              </div>
              <div className="Right">
                <h3 className="flex items-center text-[14px] font-satoshi text-green-500">
                  <HiArrowLongUp /> 4.56%
                </h3>
                <p>vs .last week</p>
              </div>
            </div>
            <div className="bottom h-3 bg-red-400"></div>
          </div>
          <div className="box-2 border">
            <div className="top flex items-center justify-between px-4 py-2">
              <div>
                <h3 className="font-satoshi-md text-[18px]">Customers</h3>
                <h2 className="font-satoshi-md text-[32px]">250</h2>
              </div>
              <div className="Right">
                <h3 className="flex items-center text-[14px] font-satoshi text-green-500">
                  <HiArrowLongUp /> 4.56%
                </h3>
                <p>vs .last week</p>
              </div>
            </div>
            <div className="bottom h-3 bg-red-400"></div>
          </div>
        </div>
      </div>

      {/* Tables  */}
      <Table />
      <TopProduct />
    </div>
  );
};

export default Dashboard;
