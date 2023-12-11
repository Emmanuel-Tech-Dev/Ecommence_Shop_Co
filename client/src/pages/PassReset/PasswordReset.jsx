import  { useContext, useState } from 'react';
import {  FiMail } from 'react-icons/fi';
import { UserContext } from '../../UserContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const { isLoading, setIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Check email for password reset link');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        toast.error(error.message.replace('Firebase', ''));
        // ..
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="px-4">
        <hr />
        <div className="form my-10 pb-10 mx-auto md:w-[30%] space-y-5 border px-4 rounded-[20px]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h1 className="text-center my-10 text-[24px]">Reset Password</h1>
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

            <button className="w-full text-center mt-5 bg-black text-white py-3 rounded-[62px] font-satoshi-md">
              Reset Password
            </button>
          </form>

          <div className="links">
            <ul className="text-[#535353] font-satoshi-md flex justify-between items-center">
              <Link to={'/login'}>
                <li>- Login</li>
              </Link>

              <Link to={'/signup'}>
                <li>Signup -</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
