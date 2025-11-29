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
        <div className="flex flex-col gap-4 bg-theme py-10 px-8 lg:ml-8 z-10 border-neutral-300 lg:border-r lg:border-l">
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
              <MdOutlineBusiness className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Company Formation & Legal Structure
              </p>
              <p className="hidden md:block mt-2">
                We provide full corporate setup services for businesses and
                investors establishing operations in the Dominican Republic. Our
                team ensures a smooth incorporation process with complete legal
                and tax compliance.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Formation of SRL, EIRL, SA, SAS & Free Zone companies
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Foreign branch registration
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  RNC registration and DGII onboarding
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Corporate bylaws & shareholder agreements
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Trademark and business name registration
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Corporate updates, minutes, capital increases & restructuring
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <FaBalanceScale className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Accounting & Tax Compliance
              </p>
              <p className="hidden md:block mt-2">
                Our accounting division delivers precise financial management
                and monthly compliance aligned with DGII standards, giving your
                business clarity, accuracy, and strategic tax support.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Monthly accounting & ITBIS filings
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Payroll, TSS & labor compliance
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Tax planning and advisory
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Annual financial statements
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <TbLicense className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Permits & Regulatory Approvals
              </p>
              <p className="hidden md:block mt-2">
                We handle the full permitting process for commercial, tourism,
                construction, and environmental projects, ensuring all
                regulatory requirements are met efficiently.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Commercial operating licenses
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Municipal & sector-specific permits
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Construction permits: MIVED
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Tourism project classifications: MITUR
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Environmental permits & impact assessments: MIMARENA
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Import/export, transport & industry licenses
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <FaPlaneArrival className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Immigration & Residency
              </p>
              <p className="hidden md:block mt-2">
                We provide high-level immigration support for investors,
                executives, and families looking to establish legal status in
                the Dominican Republic.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Investor, business & residency visas
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Temporary and permanent residency
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Work permits & dependents sponsorship
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Immigration renewals & compliance
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <MdOutlineRealEstateAgent className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Real Estate & Investment Advisory
              </p>
              <p className="hidden md:block mt-2">
                We guide investors and buyers through secure real estate
                transactions, ensuring proper due diligence, clean titles, and
                complete regulatory compliance.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Legal due diligence & title verification
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Property transfer & registration
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Structuring for real estate investments & developments
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Coordination with notaries, banks & registries
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-lg outline-1 outline-neutral-200 flex flex-col gap-1 w-full md:max-w-[40ch]">
              <MdOutlineBusinessCenter className="text-4xl text-theme" />
              <p className="uppercase font-barlow text-xl text-theme border-b-theme border-b-2">
                Banking & Administrative Support
              </p>
              <p className="hidden md:block mt-2">
                We simplify the operational setup of your business by handling
                essential administrative and banking tasks with precision and
                efficiency.
              </p>
              <ul className="ml-4 mt-4 flex flex-col gap-1">
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Opening personal & corporate bank accounts
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Virtual office & physical address services
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Apostilles, legalizations & certified translations
                </li>
                <li className="relative before:h-2 before:w-2 before:bg-transparent before:border-2 before:border-theme before:rounded-full before:absolute before:-left-4 before:top-0 before:translate-y-2">
                  Ongoing corporate maintenance & compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
