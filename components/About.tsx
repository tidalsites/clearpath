import Image from "next/image";
import headshot1 from "@/public/headshot1.png";
import headshot2 from "@/public/headshot2.png";
import decoration from "@/public/decoration.svg";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-(--blue) overflow-hidden flex flex-col md:flex-row-reverse relative min-h-[600px] isolate"
    >
      <div className="flex flex-col gap-2 px-8 py-12 bg-background lg:mr-8 lg:w-fit">
        <h2 className="text-4xl uppercase font-barlow border-b-2 py-2 w-fit text-(--blue)">
          About us
        </h2>
        <p className="py-2 max-w-[60ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate veniam beatae, exercitationem possimus dolor ullam velit
          odio ipsam, tenetur nam vero commodi placeat! Natus eos voluptate
          similique placeat consectetur.
        </p>
        <p className="py-2 max-w-[60ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate veniam beatae, exercitationem possimus dolor ullam velit
          odio ipsam, tenetur nam vero commodi placeat! Natus eos voluptate
          similique placeat consectetur.
        </p>
      </div>
      <div className="flex flex-col items-center xl:flex-row gap-y-20 gap-x-12 px-12 py-2 rounded-3xl h-fit my-12 w-full lg:justify-end">
        <div className="rounded-3xl p-4 bg-background text-foreground flex flex-col gap-2 relative max-w-[35ch] lg:max-w-none">
          <div className="flex gap-4 abolute top-0 left-0">
            <Image
              className="rounded-full -outline-offset-6 outline-2 border-4 border-(--blue) outline-neutral-100 bg-background -translate-1/4"
              src={headshot1}
              alt=""
              width={150}
              height={150}
            />
            <div className="text-right">
              <p className="text-lg font-bold">Raydi Haynes</p>
              <p className="text-sm -mt-1">Co-owner</p>
            </div>
          </div>
          <div className="flex flex-col p-4 border-t-2 border-(--blue) -mt-4">
            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              ducimus velit in voluptate accusamus, quas molestiae.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-4 bg-background text-foreground flex flex-col gap-2 relative max-w-[35ch] lg:max-w-none">
          <div className="flex flex-row-reverse gap-4 abolute top-0 left-0 lg:flex-row">
            <Image
              className="rounded-full -outline-offset-6 outline-2 border-4 border-(--blue) outline-neutral-100 bg-background translate-x-1/4 -translate-y-1/4 lg:-translate-1/4"
              src={headshot2}
              alt=""
              width={150}
              height={150}
            />
            <div className="text-left lg:text-right">
              <p className="text-lg font-bold">Abel Rodriguez</p>
              <p className="text-sm -mt-1">Co-owner</p>
            </div>
          </div>
          <div className="flex flex-col p-4 border-t-2 border-(--blue) -mt-4">
            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              ducimus velit in voluptate accusamus, quas molestiae.
            </p>
          </div>
        </div>
      </div>

      {/* <Contact /> */}
      <div className="absolute bottom-0 left-0 translate-y-[45%] opacity-5 -z-10">
        <Image src={decoration} alt="" />
      </div>
    </section>
  );
};
