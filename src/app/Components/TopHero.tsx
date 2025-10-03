import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";


export default function TopHero() {
  return (
    <div className='flex flex-row justify-between px-3 text-white' >
      <div className="flex justify-between font-serif">
        <a href="tel:07000000" className="flex items-center gap-2 hover:text-orange-400 mx-2">
       <FaPhoneAlt/>
        <span>07000000</span>
        </a>
    
      <a href="mailto:something@something" className="flex items-center gap-2 hover:text-orange-400 font-serif">
        <CiMail/>
        <span>something@something</span>
      </a>
        </div>

        <div className='text-white font flex justify-between'>
        
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 mx-2">
        <FaFacebookF size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 mx-2">
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 mx-2">
        <BsTwitterX size={24} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 mx-2">
        <FaYoutube size={24} />
      </a>
           
        </div>
       

    </div>
    
  )
}
