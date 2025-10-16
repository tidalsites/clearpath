import Image from "next/image";
import compass from "@/public/compass.svg";

export const Partners = () => {
  return (
    <section className="flex flex-col gap-8 bg-neutral-200 border-t-[1px] border-neutral-300 border-b-[1px] py-10">
      <div className="flex flex-col gap-2 bg-(--green) text-neutral-100 sm:rounded-3xl py-8 relative isolate overflow-hidden max-w-7xl mx-auto px-8 outline-1 outline-neutral-300">
        <h2 className="text-4xl uppercase text-center font-barlow border-b-2 w-fit mx-auto py-2 px-15">
          Our Partners
        </h2>
        <p className="py-2 px-4 max-w-[75ch] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate veniam beatae, exercitationem possimus dolor ullam velit
          odio ipsam, tenetur nam vero commodi placeat! Natus eos voluptate
          similique placeat consectetur.
        </p>
        <div className="absolute top-0 left-0 -translate-1/3 opacity-5 -z-10">
          <Image src={compass} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
        <div className="bg-zinc-100 px-4 py-1 outline-1 outline-neutral-300 shadow-md rounded-3xl h-36 w-36 grid place-content-center text-(--foreground)">
          Company
        </div>
      </div>
    </section>
  );
};
