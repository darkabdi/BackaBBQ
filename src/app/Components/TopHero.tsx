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
            href="tel:076-2277 684"
            className="flex items-center gap-2 hover:text-orange-300"
          >
            <FaPhoneAlt />
            {/* Number hidden on small, shown on md+ */}
            <span className="hidden md:inline">076-2277 684</span>
          </a>

          <a
            href="mailto:info@backabbq.com"
            className="flex items-center gap-2 hover:text-orange-300"
          >
            <CiMail />
            {/* Email hidden on small, shown on md+ */}
            <span className="hidden md:inline">info@backabbq.com</span>
          </a>
        </div>

        {/* Center: logo */}
    <div className="absolute left-1/2  transform -translate-x-1/2 translate-y-[5%]">
      <a href="/" className="flex">
        <Image src="/Newlogo.png" alt="Logo" width={100} height={30} />
      </a>
    </div>

        {/* Right: socials */}
        <div className="flex items-center justify-between gap-3">
    <a
  href="https://www.facebook.com/share/1A5K8VE3rk/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center hover:opacity-80 transition"
>
  <img
    src="/facebook.png" // adjust filename if different
    alt="Facebook"
    className="w-20 h-20 object-contain"
  />
</a>
        </div>
      </div>
    </div>
  );
}
