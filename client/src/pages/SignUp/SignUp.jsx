import { useContext, useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithRedirect, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { UserContext, } from '../../UserContext';
import Loading from '../../components/Loading/Loading';

const SignUp = () => {
  const navigate = useNavigate();

  const {userData , setUserData , isLoading , setIsLoading} = useContext(UserContext)

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  


  const provider = new GoogleAuthProvider()

  // Sign in the user via email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error('Password does not match ');
    } else {
        setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
        
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false)
          toast.success('Signup successfull ');
          navigate('/login');
          // ...
          updateProfile(user, {
            displayName: displayName,
          });
         
        })
        .catch((error) => {
          setIsLoading(true);
          console.log(error.message);

          toast.error(error.message.replace('Firebase:', ''));
          // ..
          setIsLoading(false);
        });
    }
  };


  //Sign in the user via Google 

const handleGoogleAuth = async ( ) => {
  await signInWithRedirect(auth , provider)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    setUserData(user)
  console.log(user)
  navigate('/')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const identity = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(identity , errorCode , errorMessage , credential)
    // ...

   })

}


  return (
    <>
      {isLoading && <Loading />}

      <div className="px-4">
        <hr />
        <form
          onSubmit={handleSubmit}
          className="form my-10 pb-10 mx-auto md:w-[30%] space-y-5 border px-4 rounded-[20px]"
        >
          <h1 className="text-center my-10 text-[24px]">Create an Account</h1>
          <div className="bg-white rounded-[62px] border flex items-center px-4 gap-5">
            <FiUser className="opacity-[.4] text-black" size={24} />
            <input
              type="text"
              required
              placeholder="Username"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="bg-transparent py-3 w-full text-black focus:outline-none"
            />
          </div>
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

          <button
            onClick={handleGoogleAuth}
            className="w-full text-center mt-5 border border-red-500 text-red-500 py-3 rounded-[62px] font-satoshi-md hover:bg-red-500 hover:text-white  transition-all duration-300 ease-in-out"
          >
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
    </>
  );
};

export default SignUp;
