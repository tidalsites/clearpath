import Link from "next/link";
import wordmark from "@/public/wordmark_192.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex justify-center w-full min-h-screen relative bg-[url('/hero.png')] bg-cover bg-no-repeat bg-black/85 bg-blend-multiply md:pt-[70px]">
      <div className="flex flex-col md:flex-row gap-8 overflow-hidden text-neutral-100 max-w-7xl mx-auto items-center">
        <div className="flex justify-center md:px-10 py-4 bg-neutral-100 md:rounded-3xl md:w-fit md:border-2 border-(--blue) w-full">
          <Image src={wordmark} alt="" />
        </div>
        <div className="flex flex-col gap-4 justify-center px-2 grow">
          <h1 className="text-5xl uppercase font-barlow mb-2">
            Business & Legal Consultation
          </h1>
          <p className="max-w-[45ch] text-xl">
            Providing a comprehensive suite of services for foreign investors
            who want to establish or expand their business operations in the
            Dominican Republic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="rounded-xl px-4 py-1 flex gap-2 items-center justify-center bg-neutral-100 text-(--blue) font-semibold text-lg outline-1 outline-(--blue)"
              href="#contact"
            >
              <div className="flex p-2 rounded-full items-center justify-center">
                <FaArrowRight />
              </div>
              <span className="">Get Started Today</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
