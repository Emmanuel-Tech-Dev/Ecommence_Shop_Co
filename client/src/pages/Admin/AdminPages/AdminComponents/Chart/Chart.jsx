import React from 'react'
import useFetchAllData from '../../../../../GeneraFetch'

import {BarChart,
Bar,

Tooltip,

ResponsiveContainer,
CartesianGrid

} from 'recharts'


const CustomTooltip = ({active, payload, label} ) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-[12px] bg-[#000] text-white p-1 rounded">
        {/* <p className="label">{`${label}`}</p> */}
        <p className="stockPrice">{` ${payload[0].value}`}</p>
        {/* Add more custom content as needed */}
      </div>
    );
  }

  return null;
};


const Chart = () => {
  const data = useFetchAllData('products')
  console.log(data)
 
  return (
    <ResponsiveContainer width={'100%'} height={90}>
      <BarChart
        data={data}
        margin={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray={'2 ,2'}></CartesianGrid>
        <Tooltip content={CustomTooltip} />
        <Bar dataKey={'stockPrice'} fill="#c0facc"></Bar>
        <Bar dataKey={'regPrice'} fill="#45a357"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart
