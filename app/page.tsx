import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Partners />
      <About />
      <Contact />
    </div>
  );
}
