
import useFetchAllData from '../../../../../GeneraFetch';
import {
  AreaChart,
  ResponsiveContainer,
  CartesianAxis,

  Tooltip,
  Area,
} from 'recharts';

import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload }) => {
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

CustomTooltip.propTypes = {
  active: PropTypes.string.isRequired,
  payload: PropTypes.bool.isRequired,
  
};


const AreaChart2 = () => {
   const data = useFetchAllData('products');

   return (
     <ResponsiveContainer width="100%" height={32}>
       <AreaChart
         data={data}
         margin={{
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
         }}
       >
         <CartesianAxis strokeDasharray={'1 ,1'}></CartesianAxis>

         <Tooltip content={CustomTooltip} />
         <Area
           type={'monotone'}
           dataKey={'regPrice'}
           stroke="#45a357"
           strokeWidth={'1.2'}
           fill="#c0facc"
         />
       </AreaChart>
     </ResponsiveContainer>
   );
}

export default AreaChart2
