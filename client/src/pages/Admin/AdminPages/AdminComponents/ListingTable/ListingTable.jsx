import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import  { useEffect, useState } from 'react';

import { database } from '../../../../../firebase/config';
import BtnLoader from '../../../../../components/Loading/BtnLoader';

import { FiEdit } from 'react-icons/fi';
import {  RiDeleteBinLine } from 'react-icons/ri';
import { LuEye } from 'react-icons/lu';

import {toast} from 'react-toastify'
import PropTypes from 'prop-types'

const ListingTable = ({
  setIsUpdateSlide,
  setSelectedProductId,
  setViewModal
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const collectionRef = collection(database, 'products');

  useEffect(() => {
    setIsloading(true);
    const fetchData = async () => {
      const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
        setIsloading(false);
      });
      return () => unsubscribe();
    };

    fetchData();
  }, [collectionRef]);

  //deleting a entry by id
  const handleDeleteItem = async (itemId) => {
    const docRef = doc(collectionRef, itemId);

    await deleteDoc(docRef)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.log('Error deleting document: ', error.message);
      });
  };

  const handleDelete = (itemId) => {
    handleDeleteItem(itemId);
    toast.success(`Product deleted successfully`);
  };

  const handleEdit = (productId) => {
    setSelectedProductId(productId);
    setIsUpdateSlide(true);
  }; 
  
  const handleView = (productId) => {
    setSelectedProductId(productId);
    setViewModal(true)
  };

  console.log(data);
  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center items-center mt-20">
          <BtnLoader />
        </div>
      )}
      {data.map((item) => (
        <>
          <br></br>
          <tbody
            key={item.id}
            className="bg-white text-[#788791] font-satoshi "
          >
            <td className="border-r">
              <input type="checkbox" />
            </td>
            <td className="border-r flex items-center gap-2 ">
              <img src={item.imageUrl} className="w-[30px]" />
              {item.productName}
            </td>
            <td className="border-r text-black font-satoshi-md">
              {item.regPrice}
            </td>
            <td className="border-r text-black font-satoshi-md">
              {item.stockPrice}
            </td>
            <td className="border-r">12</td>
            <td className=" border-r text-center flex items-center justify-center">
              <div className="flex items-center gap-5">
                <div className="tooltip">
                  <button
                    className="flex items-center gap-3 "
                    onClick={() => handleEdit(item.id)}
                  >
                    <FiEdit size={20} />
                  </button>
                  <span className="tooltiptext">Edit Product</span>
                </div>
                <div className="tooltip">
                  <button className="flex items-center gap-3 
                  
                  "
                  onClick={() => handleView(item.id)}>
                    <LuEye size={20} />
                  </button>
                  <span className="tooltiptext">View Product</span>
                </div>
                <div className="tooltip">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center gap-3 "
                  >
                    <RiDeleteBinLine size={20} />
                  </button>
                  <span className="tooltiptext">Remove Product</span>
                </div>
              </div>
            </td>
          </tbody>
        </>
      ))}
    </>
  );
};

ListingTable.propTypes = {
  
  setIsUpdateSlide : PropTypes.func.isRequired,
  setSelectedProductId : PropTypes.func.isRequired,
  setViewModal : PropTypes.func.isRequired,
};

export default ListingTable;
