import  { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import BtnLoader from '../../../../../components/Loading/BtnLoader';
import {doc, getDoc, updateDoc } from 'firebase/firestore';
import { database, storage } from '../../../../../firebase/config';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import PropTypes from 'prop-types'

const UpdateProduct = ({ isUpdateSlide, setIsUpdateSlide, selectedProductId }) => {
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL
  const [submit, setSubmit] = useState(false);
  //const collectionRef = collection(database, 'products');

  console.log(selectedProductId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDoc = await getDoc(
          doc(database, 'products', selectedProductId)
        );
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setData({
            productName: productData.productName,
            regPrice: productData.regPrice,
            stockPrice: productData.stockPrice,
            proDescription: productData.proDescription,
          });
          if (productData.imageUrl) {
            setImagePreview(productData.imageUrl);
          }
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    if (selectedProductId) {
      fetchData();
    }
  }, [selectedProductId]);

const handleInput = (e) => {
  if (e.target.type === 'file') {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  } else {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmit(true);
      let downloadURL = imagePreview;
      if (file) {
        const storageRef = ref(storage, 'files/' + file.name);
        await uploadBytesResumable(storageRef, file);
        downloadURL = await getDownloadURL(storageRef);
      }

      await updateDoc(doc(database, 'products', selectedProductId), {
        productName: data.productName,
        regPrice: data.regPrice,
        stockPrice: data.stockPrice,
        proDescription: data.proDescription,
        imageUrl: downloadURL,
      });

      toast.success('Product updated successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmit(false);
      setFile(null);
       setImagePreview(file ? imagePreview : data.imageUrl);
    
      setIsUpdateSlide(false);
    }
  };

  return (
    <div
      className={
        !isUpdateSlide
          ? 'div absolute right-[-100%] top-0 w-full bg-black/10 h-full z-[9] overflow-x-hidden transition-all duration-500 ease-in-out '
          : 'div absolute right-[0] top-0 w-full bg-black/10 h-full z-[9] transition-all duration-500 ease-in-out'
      }
    >
      <div className="w-[25rem] bg-white h-full float-right  ">
        <div className="title px-4 my-5 flex items-center justify-between">
          <div>
            <h1 className="text-[20px]">Update {data.productName} </h1>
            <p>Update {data.productName} information</p>
          </div>

          <button
            onClick={() => setIsUpdateSlide(false)}
            className=" hover:bg-[#eef3f7] w-[2.5rem] h-[2.5rem] rounded-[3.1rem] transition-all duration-300 ease-in-out "
          >
            <AiOutlineClose size={20} className="mx-auto" />
          </button>
        </div>

        {/* Form Fields */}
        <form className="px-4 " onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label htmlFor="name" className="font-satoshi text-[14px]">
              Product Name
            </label>
            <br />
            <input
              type="text"
              name="productName"
              id="name"
              onChange={(e) => handleInput(e)}
              placeholder="product name"
              className="border border-blue-400 w-full rounded py-2 indent-2"
              value={data.productName}
            />
          </div>
          <div className="space-y-1.5 mt-3">
            <label htmlFor="rPrice" className="font-satoshi  text-[14px]">
              Regular Price
            </label>
            <br />
            <input
              type="text"
              name="regPrice"
              id="rPrice"
              onChange={(e) => handleInput(e)}
              placeholder="regular price"
              className="border border-blue-400 w-full rounded py-2 indent-2"
              value={data.regPrice}
            />
          </div>

          <div className="space-y-1.5 mt-3">
            <label htmlFor="sPrice" className="font-satoshi  text-[14px]">
              Stock Price
            </label>
            <br />
            <input
              type="text"
              name="stockPrice"
              id="sPrice"
              onChange={(e) => handleInput(e)}
              placeholder="stock price"
              className="border border-blue-400 w-full rounded py-2 indent-2"
              value={data.stockPrice}
            />
          </div>

          <div className="space-y-1.5 mt-5">
            <textarea
              type="text"
              name="proDescription"
              id="proDescription"
              onChange={(e) => handleInput(e)}
              placeholder="Product Description"
              className="border border-blue-400 w-full rounded py-2 indent-2 h-[100px]"
              value={data.proDescription}
            />
          </div>
          <div className="space-y-1.5 mt-4">
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => handleInput(e)}
              className="hidden"
            />
            <label
              htmlFor="file"
              className="font-satoshi text-[14px] cursor-pointer"
            >
              <div className="h-[100px] w-full bg-[#eef3f7] rounded flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-full max-w-full"
                  />
                ) : (
                  <span className="text-[#92a3ae]">Add image file</span>
                )}
              </div>
            </label>
          </div>

          <button
            // onClick={handleSubmit}
            className="mt-3 text-center w-full py-2 bg-blue-400 rounded text-white"
          >
            {submit ? <BtnLoader /> : `Update Product`}
          </button>
        </form>
      </div>
    </div>
  );
};

UpdateProduct.propTypes = {
  isUpdateSlide: PropTypes.bool.isRequired,
  setIsUpdateSlide : PropTypes.func.isRequired,
  selectedProductId: PropTypes.string.isRequired
};



export default UpdateProduct;
