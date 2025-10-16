import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { LuClock12 } from "react-icons/lu";

export const ContactBar = () => {
  return (
    <div className="w-full hidden md:block bg-background text-(--blue)">
      <div className="max-w-7xl mx-auto px-4 py-1 flex gap-4 border-[1px] border-t-0 border-background ">
        <a
          href="mailto:info@myclearpath.co"
          className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full"
        >
          <MdEmail className="text-2xl" />
          <span>info@myclearpath.co</span>
        </a>
        <a className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full">
          <MdWhatsapp className="text-2xl" />
          +1 (123) 123-4567
        </a>
        <div className="flex gap-2 items-center justify-center grow">
          <LuClock12 className="text-2xl" />
          <p>Mon - Fri 08:00 - 20:00</p>
        </div>
        <div className="flex gap-2 items-center ml-auto">
          <a
            href="https://facebook.com"
            className="p-1 rounded-full hover:bg-(--blue) hover:text-background hover:scale-105 transition-all"
          >
            <MdFacebook className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            className="p-1 rounded-full hover:bg-(--blue) hover:text-background hover:scale-105 transition-all"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
