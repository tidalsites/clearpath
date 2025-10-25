import { MdEmail, MdWhatsapp } from "react-icons/md";
import { LuClock12 } from "react-icons/lu";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="text-theme bg-neutral-200 relative isolate overflow-hidden border-t border-neutral-300 px-8 py-12"
    >
      <div className="flex flex-col gap-4 sm:justify-center | sm:gap-8 | xl:ml-8 xl:flex-row xl:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl uppercase font-barlow border-b-2 py-2 w-fit">
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
              className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-theme hover:text-background transition-colors rounded-full"
            >
              <MdEmail className="text-2xl" />
            </a>
            <a className="flex gap-1 items-center cursor-pointer px-2 py-1 hover:bg-theme hover:text-background transition-colors rounded-full">
              <MdWhatsapp className="text-2xl" />
            </a>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2 py-4 h-fit mt-2 sm:mt-4 bg-theme text-background rounded-3xl px-4 border border-neutral-300 max-w-[350px]">
            <p className="flex justify-between items-center gap-2 text-lg bg-background text-theme px-4 py-1 rounded-full w-full col-span-2 border border-neutral-300">
              Hours
              <LuClock12 className="text-2xl" />
            </p>
            <div className="grid grid-cols-subgrid col-span-2 md:gap-1 lg:gap-4 xl:gap-12">
              <p>Monday - Friday</p>
              <p className="text-right">9:00 - 17:00</p>
            </div>
            <div className="grid grid-cols-subgrid col-span-2 md:gap-1 lg:gap-4 xl:gap-12">
              <p>Saturday</p>
              <p className="text-right">9:00 - 12:00</p>
            </div>
            <div className="grid grid-cols-subgrid col-span-2 md:gap-1 lg:gap-4 xl:gap-12">
              <p>Sunday</p>
              <p className="text-right">Closed</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
