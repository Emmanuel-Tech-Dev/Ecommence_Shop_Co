
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types'



const BoxCards = ({item}) => {
   


  return (
    <>
      <Link to={`/product/${item.id}`}>
        <img src={item.imageUrl} className="rounded-[14px] max-w-[150px] h-[150px] object-cover" alt={item.productName} />
        <h3 className="text-[16px] font-satoshi-bold mt-2">{item.productName.slice(0 , 15)}...</h3>
        <div className="ratings flex items-center gap-5 my-2">
          <img src="../image/ratings.png" className='h-[15px]' />
          <span className="text-[14px]">4/5</span>
        </div>
        <h2 className="text-[20px] font-satoshi-bold">${item.stockPrice}</h2>
      </Link>
    </>
  );
}

BoxCards.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BoxCards
 
 