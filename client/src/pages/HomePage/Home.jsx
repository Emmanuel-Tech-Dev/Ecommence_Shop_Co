
import Category_s from '../../components/Category/Category_s';
import Hero from '../../components/Hero/Hero'


import Product from '../../components/Products/Products'

const Home = () => {
  return (
    <div>
    
      <Hero />
      <Product title="New Arrivals" />
      <div className="px-4">
        <button className="w-full text-center mt-10 border py-4 rounded-[62px] mx-auto md:w-[210px] md:flex md:items-center md:justify-center md:text-center">
          View All
        </button>
      </div>

      <div className="px-4">
        <hr className="mt-10" />
      </div>
      <Product
        title="Top Selling
      "
      />
      <div className="px-4">
        <button className="w-full text-center mt-10 border py-4 rounded-[62px] mx-auto md:w-[210px] md:flex md:items-center md:justify-center md:text-center">
          View All
        </button>
      </div>
      <Category_s />
    </div>
  );
}

export default Home
