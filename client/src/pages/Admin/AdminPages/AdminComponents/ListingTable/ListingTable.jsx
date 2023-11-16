import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { database } from '../../../../../firebase/config';

const ListingTable = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(database, 'products');

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data)
      });
      return () => unsubscribe()
    };

    fetchData()
  }, []);

  console.log(data)
  return (
    <>
      {data.map((item) => (
        <>
          <br></br>
          <tbody key={item.id} className="bg-white text-[#788791] font-satoshi ">
            <td className="border-r">
              <input type="checkbox" />
            </td>
            <td className="border-r flex items-center gap-2 ">
              <img src={item.imageUrl} className="w-[30px]" />
            {item.productName}
            </td>
            <td className="border-r text-black font-satoshi-md">{item.regPrice}</td>
            <td className="border-r text-black font-satoshi-md">{item.stockPrice}</td>
            <td className="border-r">12</td>
            <td className="border-r text-center flex items-center justify-center">
              <button className="text-center hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out">
                <AiOutlineEllipsis size={24} className="mx-auto" />
              </button>
            </td>
          </tbody>
        </>
      ))}
    </>
  );
};

export default ListingTable;
