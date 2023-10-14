
import Category_s from '../../components/Category/Category_s';
import Hero from '../../components/Hero/Hero'

import Product from '../../components/Products/Product'

const Home = () => {
  return (
    <div>
      <Hero />
      <Product title="New Arrivals" />
      <div className="px-4">
        <hr className="mt-10" />
      </div>
      <Product
        title="Top Selling
      "
      />
    <Category_s/>
    </div>
  );
}

export default Home
