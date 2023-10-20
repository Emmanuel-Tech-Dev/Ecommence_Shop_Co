import React, { useContext, useEffect, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { UserContext } from '../../UserContext';

const Login = () => {
  const navigate = useNavigate();
  const {userData , setUserData} = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUserData(user)
         
        toast.success('Login successfull');
        navigate('/');
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message.replace('Firebase:', ''));
        // ..
      });
  };


  useEffect(() => {

console.log(userData);
  } , [userData])


  return (
    <div className="px-4">
      <hr />
      <form
        onSubmit={handleSubmit}
        className="form my-10 pb-10 mx-auto md:w-[30%] space-y-5 border px-4 rounded-[20px]"
      >
        <h1 className="text-center my-10 text-[24px]">Welcome Back</h1>
        <div className="bg-white rounded-[62px] border flex items-center px-4 gap-5">
          <FiMail className="opacity-[.4] text-black" size={24} />
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent py-3 w-full text-black focus:outline-none"
          />
        </div>
        <div className="bg-white rounded-[62px] border flex items-center px-4 gap-5">
          <FiLock className="opacity-[.4] text-black" size={24} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent py-3 w-full text-black focus:outline-none"
          />
        </div>

        <button className="w-full text-center mt-5 bg-black text-white py-3 rounded-[62px] font-satoshi-md">
          Log in
        </button>

        <h5 className="text-center opacity-60">OR</h5>

        <button className="w-full text-center mt-5 border border-red-500 text-red-500 py-3 rounded-[62px] font-satoshi-md hover:bg-red-500 hover:text-white  transition-all duration-300 ease-in-out">
          Login with Google
        </button>

        <h4 className="text-center text-[14px] ">
          Dont have an account already!{' '}
          <Link to={'/signup'} className="text-blue-500 font-satoshi-md">
            Sign up
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default Login;
