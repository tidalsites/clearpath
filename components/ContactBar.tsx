import { MdEmail, MdWhatsapp } from "react-icons/md";
import { LuClock12 } from "react-icons/lu";

export const ContactBar = () => {
  return (
    <div className="w-full hidden md:block bg-background text-theme">
      <div className="max-w-7xl mx-auto px-4 py-1 flex gap-4 border border-t-0 border-background ">
        <a
          href="mailto:info@myclearpath.co"
          className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-theme hover:text-background transition-colors rounded-full"
        >
          <MdEmail className="text-2xl" />
          <span>info@myclearpath.co</span>
        </a>
        <a className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-theme hover:text-background transition-colors rounded-full">
          <MdWhatsapp className="text-2xl" />
          +1 (123) 123-4567
        </a>
        <div className="flex gap-2 items-center justify-end grow">
          <LuClock12 className="text-2xl" />
          <p className="border-r border-theme pr-2">Mon - Fri 09:00 - 17:00</p>
          <p>Sat 09:00 - 12:00</p>
        </div>
      </div>
    </div>
  );
};
