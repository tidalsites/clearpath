export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-background px-4 py-4 rounded-3xl text-(--blue) grid place-content-center relative isolate overflow-hidden"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl uppercase font-barlow border-b-2 px-15 py-2 text-center">
          Contact Us
        </h2>
        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="first_name">
                  First Name
                </label>
                <input
                  className="bg-neutral-100 rounded-lg px-1 py-0.5 text-(--foreground)"
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
                  className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black"
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
                  className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black"
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
                  className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black"
                  type="tel"
                  name="phone"
                  id="contact_phone"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-[clamp(250px,100%,400px)] min-h-[200px]">
              <label className="text-sm" htmlFor="description">
                Description
              </label>
              <textarea
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-black h-full"
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
    </section>
  );
};
