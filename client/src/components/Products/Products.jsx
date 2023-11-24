import Card from '../Cards/Card'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../../firebase/config';
import { useEffect, useState } from 'react';


const Product = ({title}) => {
   const [data , setData] = useState([])

  const collectionRef = collection(database , 'products')

  useEffect(() => {
     const fetchData = async () => {
       const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
         const data = [];
         querySnapshot.forEach((doc) => {
           data.push({ id: doc.id, ...doc.data() });
         });
         setData(data);
       });
       return () => unsubscribe();
     };

     fetchData();

  } , [])

console.log(data)

 const filterProducts = data
   .slice()
   .reverse()
   .slice(0, 5)
   
  //  .sort(
  //    (a, b) =>
  //      new Date() - new Date)
  //  );

    const settings = {
      className: 'center',
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
     

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
          },
        },{
          breakpoint: 390,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
          },
        }
      ],
    };
  return (
    <div className="px-4 md:px-20">
      <h1 className="uppercase text-[32px] mt-10 text-center mb-8 md:text-[48px]">
        {title}
      </h1>
      <Slider {...settings}>
        {filterProducts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Slider>

     
    </div>
  );
}

export default Product
