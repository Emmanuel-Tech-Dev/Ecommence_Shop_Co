
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types'
const Card = ({item}) => {


  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.imageUrl}
          className="rounded-[14px] w-[250px] h-[250px]"
        />
        <h3 className="text-[20px] font-satoshi-bold mt-4">
          {item.productName}
        </h3>
        <div className="ratings flex items-center gap-5 my-2">
          <img src="../image/ratings.png" />
          <span className="text-[14px]">4/5</span>
        </div>
        <div className="flex gap-5">
          <h2 className="text-[20px] font-satoshi-bold">${item.stockPrice}</h2>
          <h2 className="text-[20px] font-satoshi-bold opacity-[.3] line-through ">
            ${item.regPrice}
          </h2>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  item : PropTypes.object.isRequired
}


export default Card;
