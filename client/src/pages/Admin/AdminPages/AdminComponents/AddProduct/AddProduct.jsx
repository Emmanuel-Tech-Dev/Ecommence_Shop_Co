import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import BtnLoader from '../../../../../components/Loading/BtnLoader';
import { addDoc, collection } from 'firebase/firestore';
import { database, storage } from '../../../../../firebase/config';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AddProduct = ({ isAddSlide, setIsAddSlide }) => {
 const [data, setData] = useState({
   productName: '',
   regPrice: '',
   stockPrice: '',
   proDescription: '',
 });
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL
  const [submit, setSubmit] = useState(false);
  const collectionRef = collection(database, 'products');

  const handleInput = (e) => {
    if (e.target.type === 'file') {
      // Handle file separately
      const selectedFile = e.target.files[0];

      // Set the selected file and generate a preview URL
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
       setData((prevData) => ({
         ...prevData,
         [e.target.name]: e.target.value,
       }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      setSubmit(true);

      // Upload file to Firebase Storage
      let downloadURL = null;
      if (file) {
        const storageRef = ref(storage, 'files/' + file.name);
        await uploadBytesResumable(storageRef, file);
        downloadURL = await getDownloadURL(storageRef);
      }

      // Add product data to Firestore
      await addDoc(collectionRef, {
        productName: data.productName,
        regPrice: data.regPrice,
        stockPrice: data.stockPrice,
        proDescription: data.proDescription,
        imageUrl: downloadURL, // Add the download URL to your Firestore data
      });

      toast.success('Product added successfully!');
     
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmit(false);
      setFile(null); // Clear the file state after submission
      setImagePreview(null); // Clear the image preview
     setIsAddSlide(false) // set slide to false
       setData({
         productName: '',
         regPrice: '',
         stockPrice: '',
         proDescription: '',
       });
  
    }
    
  };


  const handleCloseAdd = () => {
    setIsAddSlide(false)
    setData({
      productName: '',
      regPrice: '',
      stockPrice: '',
      proDescription: '',
    });
    setFile(null)
    setImagePreview(null)

  }


  return (
    <div
      className={
        !isAddSlide
          ? 'div absolute right-[-100%] top-0 w-full bg-black/10 h-full z-[9] overflow-x-hidden transition-all duration-500 ease-in-out '
          : 'div absolute right-[0] top-0 w-full bg-black/10 h-full z-[9] transition-all duration-500 ease-in-out'
      }
    >
      <div className="w-[25rem] bg-white h-full float-right  ">
        <div className="title px-4 my-5 flex items-center justify-between">
          <div>
            <h1 className="text-[20px]">New Product </h1>
            <p>Add new product information</p>
          </div>

          <button
            onClick={handleCloseAdd}
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
          <button className="mt-3 text-center w-full py-2 bg-blue-400 rounded text-white">
            {submit ? <BtnLoader /> : 'Add New Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
