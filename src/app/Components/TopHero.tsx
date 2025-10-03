import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

export default function TopHero() {
  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
        {/* Left: contact */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="tel:07000000"
            className="flex items-center gap-2 hover:text-orange-300"
          >
            <FaPhoneAlt />
            {/* Number hidden on small, shown on md+ */}
            <span className="hidden md:inline">07000000</span>
          </a>

          <a
            href="mailto:something@something"
            className="flex items-center gap-2 hover:text-orange-300"
          >
            <CiMail />
            {/* Email hidden on small, shown on md+ */}
            <span className="hidden md:inline">something@something</span>
          </a>
        </div>

        {/* Center: logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex">
            <Image src="/Newlogo.png" alt="Logo" width={100} height={30} />
          </a>
        </div>

        {/* Right: socials */}
        <div className="flex items-center justify-between gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <BsTwitterX size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
