
import {FiMail} from 'react-icons/fi'
import {

  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="footer max-h-[200vh] md:min-h-[87vh]">
      <div className="px-4 mt-10 md:px-20">
        <div className="newsletter bg-black rounded-[20px] p-8 text-white md:flex md:items-center md:justify-between md:px-16">
          <h1 className="text-[32px] leading-[38px] md:w-[60%] md:text-[40px] md:leading-[45px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>

          <form className="my-8 md:w-[30%]">
            <div className="bg-white rounded-[62px] flex items-center px-4 gap-5">
              <FiMail className="opacity-[.4] text-black" size={24} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent py-3 w-full text-black focus:outline-none"
              />
            </div>
            <button className="w-full text-center mt-5 bg-white text-black py-3 rounded-[62px] font-satoshi-md">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
        <div className="md:flex md:items-center md:gap-x-6 md:mt-12">
          <div className="div mt-10">
            <img src="../image/logo.png" />
            <p className="opacity-[.6] py-3 md:w-[50%]">
              We have clothes that suits your style and which you&rsquo;re proud to
              wear. From woment to men
            </p>
           
            <div className="socials">
              <div className="social flex items-center gap-x-4">
                <div className="i w-[32px] h-[32px] bg-white cursor-pointer flex items-center justify-center rounded-[50px]">
                  <AiOutlineTwitter size={24} />
                </div>
                <div className="i w-[32px] h-[32px] bg-white cursor-pointer flex items-center justify-center rounded-[50px]">
                  <AiFillInstagram size={24} />
                </div>
                <div className="i w-[32px] h-[32px] bg-white cursor-pointer flex items-center justify-center rounded-[50px]">
                  <AiFillFacebook size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="links flex flex-wrap justify-between items-center ">
            <div className="">
              <h3 className="text-[14px] font-satoshi-md md:text-[16px]">
                COMPANY
              </h3>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14px] font-satoshi-md md:text-[16px]">
                HELP
              </h3>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14px] font-satoshi-md md:text-[16px]">
                FAQ
              </h3>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14px] font-satoshi-md md:text-[16px]">
                RESOURCES
              </h3>
              <ul>
                <li>Free eBook</li>
                <li>Development</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-10" />

        <div className="div opacity-[.6] text-center mt-8 text-[14px] md:flex md:items-center md:justify-between">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex justify-center items-center mt-3 mb-5 md:mt-0 md:mb-0">
            <img src="../image/Badge.png" />
            <img src="../image/Badge-1.png" />
            <img src="../image/Badge-2.png" />
            <img src="../image/Badge-3.png" />
            <img src="../image/Badge-4.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
