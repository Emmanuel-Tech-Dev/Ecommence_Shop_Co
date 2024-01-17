import useFetchAllData from "../../../../../GeneraFetch";


const Table = () => {

  const data = useFetchAllData('orders')
 console.log(data)


  return (
    <div>
      <table className="w-full text-justify my-10 ">
        <thead className="border w-full bg-white h-[8vh] text-[14px] text-[#383e42]">
          <th>Order No.</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </thead>
        {data.map((item) => (
          <tbody
            key={item.id}
            className="tb bg-white text-[#788791] font-satoshi border"
          >
            <td className="text-blue-500">#eefef3</td>
            <td>
              <div className="flex items-center gap-3">
                <div className=" bg-green-200 h-[35px] flex items-center justify-center w-[35px] rounded-[50px]">
                  <span className="text-green-500 font-satoshi-bold ">
                    {item?.customer ? item.customer[0] : ''}
                  </span>
                </div>
                <div>
                  <span className="text-[14px] font-satoshi text-gray-400">
                   {item.customer}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-[14px]">{item.createdAt}</td>
            <td className="text-[14px]">
              <span className="font-satoshi-md text-black">{item.pricePurchase}</span> USD
            </td>
            <td>
              <span className="p-2 text-green-500 text-[.9rem]">
                &#x2022; paid
              </span>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
