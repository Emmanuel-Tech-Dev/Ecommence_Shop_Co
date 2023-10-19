import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error('Password does not match ');
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        toast.success('Signup successfull ');
        navigate('/login');
        // ...
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message.replace('Firebase:', ''));
        // ..
      });
  };

  return (
    <div className="px-4">
      <hr />
      <form
        onSubmit={handleSubmit}
        className="form my-10 pb-10 mx-auto md:w-[30%] space-y-5 border px-4 rounded-[20px]"
      >
        <h1 className="text-center my-10 text-[24px]">Create an Account</h1>
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

        <div className="bg-white rounded-[62px] border flex items-center px-4 gap-5">
          <RiLockPasswordLine className="opacity-[.4] text-black" size={24} />
          <input
            type="password"
            placeholder="Confirm password"
            value={cPassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="bg-transparent py-3 w-full text-black focus:outline-none"
          />
        </div>
        <button className="w-full text-center mt-5 bg-black text-white py-3 rounded-[62px] font-satoshi-md">
          Sign up
        </button>

        <h5 className="text-center opacity-60">OR</h5>

        <button className="w-full text-center mt-5 border border-red-500 text-red-500 py-3 rounded-[62px] font-satoshi-md hover:bg-red-500 hover:text-white  transition-all duration-300 ease-in-out">
          Create account with Google
        </button>

        <h4 className="text-center text-[14px] ">
          Have an account already!{' '}
          <Link to={'/login'} className="text-blue-500 font-satoshi-md">
            Login
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
