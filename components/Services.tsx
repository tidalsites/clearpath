import {
  MdOutlineBusiness,
  MdOutlineBusinessCenter,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { FaBalanceScale, FaPlaneArrival } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";

export const Services = () => {
  return (
    <section id="services" className="">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 bg-(--blue) py-10 px-8 lg:ml-8 z-10 border-neutral-300 lg:border-r-[1px] lg:border-l-[1px]">
          <h2 className="text-4xl uppercase font-barlow border-b-2 py-2 w-fit text-background">
            Services
          </h2>
          <p className="py-2 max-w-[60ch] text-neutral-100">
            We eliminate the challenges of navigating Dominican bureaucracy,
            language barriers, and compliance by offering one-stop business
            solutions that cover every stage — from legal incorporation to
            operational setup and immigration.
          </p>
        </div>
        <div className="flex py-10 px-8 gap-4 w-full mr-4">
          <div className="flex flex-wrap justify-center w-fit gap-4">
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <MdOutlineBusiness className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Company Formation & Legal Structure
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Incorporation of SRL, EIRL, or SA entities
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Drafting bylaws and shareholder agreements
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Trademark and business name registration
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <FaBalanceScale className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Accounting & Tax Services
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  RNC registration and DGII compliance
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Monthly accounting and tax filings
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Payroll and labor compliance
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Annual financial reports
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <TbLicense className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Permits & Licensing
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Commercial operating licenses
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Municipal permits
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Sector-specific licenses (tourism, import/export,
                  manufacturing, etc.)
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <FaPlaneArrival className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Immigration & Residency
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Business and investor visa processing
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Temporary and permanent residency
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Work permits and family sponsorships
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <MdOutlineRealEstateAgent className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Real Estate & Investment Advisory
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Due diligence for property purchases
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Title verification and transfer assistance
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Coordination with notaries and registries
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <MdOutlineBusinessCenter className="text-4xl text-(--blue)" />
              <p className="uppercase font-barlow text-xl text-(--blue) border-b-(--blue) border-b-2">
                Banking & Administrative Support
              </p>
              <p className="hidden md:block mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto provident quaerat, exercitationem animi ipsa facilis
                maxime est eius quos harum accusantium iure quae, aliquid
                doloremque?
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Assistance with opening local bank accounts
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Virtual office services
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-(--blue) before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Document translation and legalization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
