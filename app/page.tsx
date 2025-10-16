import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import compass from "@/public/compass.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Partners />
      <About />
      <Contact />
      {/* <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-10 -z-10">
        <Image src={compass} alt="" />
      </div> */}
    </div>
  );
}
