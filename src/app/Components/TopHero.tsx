import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

export default function TopHero() {
  return (
<div className="text-white p-3 bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] shadow-lg backdrop-blur-sm border-b border-[#2a2a2a]">
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
    <div className="absolute left-1/2  transform -translate-x-1/2 translate-y-[15%]">
      <a href="/" className="flex">
        <Image src="/Newlogo.png" alt="Logo" width={100} height={30} />
      </a>
    </div>

        {/* Right: socials */}
        <div className="flex items-center justify-between gap-3">
  <a
    href="https://facebook.com"
    className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1a] hover:bg-orange-600 transition"
  >
    <FaFacebookF size={16} />
  </a>
  <a
    href="https://instagram.com"
    className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1a] hover:bg-orange-600 transition"
  >
    <FaInstagram size={16} />
  </a>
  <a
    href="https://twitter.com"
    className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1a] hover:bg-orange-600 transition"
  >
    <BsTwitterX size={16} />
  </a>
  <a
    href="https://youtube.com"
    className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1a] hover:bg-orange-600 transition"
  >
    <FaYoutube size={16} />
  </a>
</div>
      </div>
    </div>
  );
}
