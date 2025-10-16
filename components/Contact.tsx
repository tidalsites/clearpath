import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { LuClock12 } from "react-icons/lu";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="text-(--blue) bg-neutral-200 relative isolate overflow-hidden border-t-[1px] border-neutral-300 px-8 py-12"
    >
      <div className="flex flex-wrap justify-between gap-4 sm:gap-8 md:gap-12 sm:ml-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl uppercase font-barlow border-b-2 py-2 w-fit ">
            Contact Us
          </h2>
          <p className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quis natus dolores eum unde minima quas expedita voluptatum facere,
            enim neque, optio obcaecati iste adipisci qui, maiores voluptatibus!
            Vitae, iure id! Animi voluptatem facere consequuntur ipsa modi ea
            expedita ratione?
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:info@myclearpath.co"
              className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full"
            >
              <MdEmail className="text-2xl" />
            </a>
            <a className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full">
              <MdWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full"
            >
              <MdFacebook className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-(--blue) hover:text-background transition-colors rounded-full"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <div className="grid grid-cols-[auto,1fr] w-fit gap-2 py-4 h-fit mt-8 bg-(--blue) text-background rounded-3xl px-4 border-[1px] border-neutral-300">
            <p className="flex justify-between items-center gap-2 text-lg bg-background text-(--blue) px-4 py-1 rounded-full w-full col-span-2 border-[1px] border-neutral-300">
              Hours
              <LuClock12 className="text-2xl" />
            </p>
            <div className="grid grid-cols-subgrid col-span-2 gap-4 sm:gap-8 md:gap-12">
              <p>Monday - Friday</p>
              <p className="text-right">8:00 - 16:00</p>
            </div>
            <div className="grid grid-cols-subgrid col-span-2 gap-4 sm:gap-8 md:gap-12">
              <p>Saturday</p>
              <p className="text-right">8:00 - 16:00</p>
            </div>
            <div className="grid grid-cols-subgrid col-span-2 gap-4 sm:gap-8 md:gap-12">
              <p>Sunday</p>
              <p className="text-right">8:00 - 16:00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl mx-4 gap-8 py-4 md:py-8 my-8 border-[1px] border-neutral-300 bg-background shadow-[2px_2px_6px_-2px_hsl(0,0%,70%)]">
          <form
            className="flex flex-col gap-4 p-4 sm:pl-8 md:pl-12 text-lg"
            action=""
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black border-[1px] border-neutral-300"
                    type="text"
                    name="first_name"
                    id="contact_first_name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm" htmlFor="last_name">
                    Last Name
                  </label>
                  <input
                    className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black border-[1px] border-neutral-300"
                    type="text"
                    name="last_name"
                    id="contact_last_name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black border-[1px] border-neutral-300"
                    type="email"
                    name="email"
                    id="contact_email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black border-[1px] border-neutral-300"
                    type="tel"
                    name="phone"
                    id="contact_phone"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 min-w-[300px] md:min-w-[400px] min-h-[200px]">
                <label className="text-sm" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black h-full border-[1px] border-neutral-300"
                  name="description"
                  id="contact_description"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <button className="bg-(--blue) text-background rounded-xl px-3 py-1 w-fit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
