import Image from "next/image";
import headshot1 from "@/public/headshot1.png";
import headshot2 from "@/public/headshot2.png";

export const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse gap-8 mx-8 my-20">
      <div className="flex flex-col sm:flex-row gap-y-4 gap-x-12 px-4 py-2 rounded-3xl text-neutral-100 h-fit">
        <div className="rounded-3xl p-4 bg-(--green) flex flex-col gap-2 relative">
          <div className="flex gap-4 abolute top-0 left-0">
            <Image
              className="rounded-full -outline-offset-6 outline-2 border-4 border-(--green) outline-neutral-100 bg-(--green) -translate-1/4"
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
          {/* <div className="flex flex-col">
            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              ducimus velit in voluptate accusamus, quas molestiae.
            </p>
          </div> */}
        </div>
        <div className="rounded-3xl p-4 bg-(--green) flex flex-col gap-2 relative">
          <div className="flex gap-4 abolute top-0 left-0">
            <Image
              className="rounded-full -outline-offset-6 outline-2 border-4 border-(--green) outline-neutral-100 bg-(--green) -translate-1/4"
              src={headshot2}
              alt=""
              width={150}
              height={150}
            />
            <div className="text-right">
              <p className="text-lg font-bold">Abel Rodriguez</p>
              <p className="text-sm -mt-1">Co-owner</p>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              ducimus velit in voluptate accusamus, quas molestiae.
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-2 px-8 py-20 rounded-3xl">
        <h2 className="text-4xl uppercase font-barlow border-b-2 w-fit">
          About us
        </h2>
        <p className="py-2 max-w-[45ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate veniam beatae, exercitationem possimus dolor ullam velit
          odio ipsam, tenetur nam vero commodi placeat! Natus eos voluptate
          similique placeat consectetur.
        </p>
        <p className="py-2 max-w-[45ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate veniam beatae, exercitationem possimus dolor ullam velit
          odio ipsam, tenetur nam vero commodi placeat! Natus eos voluptate
          similique placeat consectetur.
        </p>
      </div>
      {/* <Contact /> */}
    </section>
  );
};
