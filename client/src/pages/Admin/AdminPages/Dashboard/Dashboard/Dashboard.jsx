import { HiArrowLongUp } from 'react-icons/hi2';
import Table from '../../AdminComponents/DashTable/Table';
import TopProduct from '../../AdminComponents/TopProducts/TopProduct';
import Chart from '../../AdminComponents/Chart/Chart';
import AreaCharte from '../../AdminComponents/Chart/AreaCharte';
import AreaChart2 from '../../AdminComponents/Chart/AreaChart2';

const Dashboard = () => {
  return (
    <div className="Dashboard px-8 my-5">
      <div className="header my-10">
        <h1 className="text-[24px]">Dashboard</h1>
      </div>
      <div className="top flex gap-10 items-center ">
        <div className="box bg-[#024d11] border relative">
          <div className="top flex items-center justify-between px-4 py-2 text-[#fefe]">
            <div>
              <h3 className="font-satoshi-md text-[18px]">Total Sales</h3>
              <h2 className="font-satoshi-md text-[32px]">$74,958.49</h2>
            </div>
            <div className="Right">
              <h3 className="flex items-center text-[14px] font-satoshi text-green-500">
                <HiArrowLongUp /> 4.56%
              </h3>
              <p>vs .last week</p>
            </div>
          </div>
          <div className="mt-[36.5%]">
            <AreaCharte />
          </div>
        </div>
        <div className="box bg-white border ">
          <div className="top flex items-center justify-between px-4 py-2 ">
            <div>
              <h3 className="font-satoshi-md text-[18px]">Average Order</h3>
              <h2 className="font-satoshi-md text-[32px]">$463.35</h2>
            </div>
            <div className="Right">
              <h3 className="flex items-center text-[14px] font-satoshi text-green-500">
                <HiArrowLongUp /> 4.56%
              </h3>
              <p>vs .last week</p>
            </div>
          </div>
          <span className="px-4 text-[12px]">Orders over time</span>
          <div className="mt-[26.7%]">
            <Chart />
          </div>
        </div>
        <div className="mid-box gap-10 flex flex-col items-center">
          <div className="box-2 border h-full">
            <div className="top flex items-center justify-between px-4 py-2 ">
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
            <div className="flex justify-end items-end">
              <AreaChart2 />
            </div>
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
            <div className="flex justify-end items-end">
              <AreaChart2 />
            </div>
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
