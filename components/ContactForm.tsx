"use client";

import { ContactSchema, ContactFormValues } from "@/lib/contactSchema";
import { sendContactEmail } from "@/lib/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCircleCheck, FaSpinner } from "react-icons/fa6";
import { LuCheck } from "react-icons/lu";
import { MdError, MdWarning } from "react-icons/md";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      company_formation: false,
      accounting: false,
      permits: false,
      immigration: false,
      real_estate: false,
      banking: false,
    },
  });

  const [submission, setSubmission] = useState({
    hasSubmitted: false,
    success: false,
  });

  const hasErrors =
    (errors && errors.first_name) ||
    (errors && errors.last_name) ||
    (errors && errors.email) ||
    (errors && errors.phone) ||
    (errors && errors.description) ||
    (errors && errors.company_formation);

  console.log(errors);

  const sendContactRequest = async (data: ContactFormValues) => {
    const results = await sendContactEmail(data);

    if (!results.success) {
      setSubmission({ hasSubmitted: true, success: false });
      if (results.error) console.error(results.error);

      if (!results.error && results.data) {
        console.error(results.data);
      }
    }

    if (results.success) {
      setSubmission({ hasSubmitted: true, success: true });
    }

    reset();
  };

  return (
    <div className="flex flex-col rounded-3xl gap-8 py-4 lg:py-8 my-12 border border-neutral-300 bg-background shadow-[2px_2px_6px_-2px_hsl(0,0%,70%)] w-full md:w-fit">
      {hasErrors ? (
        <div className="flex justify-between px-4 py-1 -my-4 text-sm bg-neutral-200 rounded-full mx-4 outline-neutral-300 outline lg:px-8">
          <div className="flex gap-2">
            <MdWarning className="text-orange-300 text-lg" />
            <p>Please resolve errors before submitting</p>
          </div>
          <button
            onClick={() =>
              setSubmission({ success: false, hasSubmitted: false })
            }
            className="p-0 rounded-full bg-background aspect-square outline outline-theme w-5 h-5 grid place-content-center cursor-pointer"
          >
            X
          </button>
        </div>
      ) : isSubmitting ? (
        <div className="px-2 py-1 text-sm bg-neutral-200 rounded-full mx-4 outline-neutral-300 outline lg:px-4">
          <div className="flex gap-2">
            <FaSpinner className="text-theme text-lg animate-spin" />
            <p>Submitting...</p>
          </div>
        </div>
      ) : submission.hasSubmitted && submission.success ? (
        <div className="px-2 py-1 text-sm bg-neutral-200 rounded-full mx-4 outline-neutral-300 outline lg:px-4 flex justify-between">
          <div className="flex gap-2">
            <LuCheck className="text-emerald-400 text-lg" />
            <p>
              You&apos;re contact request has been received! We will reach out
              shortly
            </p>
          </div>
          <button
            onClick={() =>
              setSubmission({ success: false, hasSubmitted: false })
            }
            className="p-0 rounded-full bg-background aspect-square outline outline-theme w-5 h-5 grid place-content-center cursor-pointer"
          >
            X
          </button>
        </div>
      ) : submission.hasSubmitted && !submission.success ? (
        <div className="px-2 py-1 text-sm bg-neutral-200 rounded-full mx-4 outline-neutral-300 outline lg:px-4">
          <div className="flex gap-2">
            <MdError className="text-red-400 text-lg" />
            <p>
              Something went wrong. You&apos;re request was not processed.
              Please try again.
            </p>
          </div>
        </div>
      ) : null}

      <form
        className="flex flex-col gap-4 px-4 pb-4 lg:px-8 text-lg"
        onSubmit={handleSubmit(sendContactRequest)}
      >
        <div className="flex flex-col gap-4 | md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="first_name">
                First Name
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="text"
                {...register("first_name")}
              />
              {errors && errors["first_name"] && (
                <span className="text-xs mt-px">
                  {errors["first_name"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="last_name">
                Surname
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="text"
                {...register("last_name")}
              />
              {errors && errors["last_name"] && (
                <span className="text-xs mt-px">
                  {errors["last_name"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="email"
                {...register("email")}
              />
              {errors && errors["email"] && (
                <span className="text-xs mt-px">{errors["email"].message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="tel"
                {...register("phone")}
              />
              {errors && errors["phone"] && (
                <span className="text-xs mt-px">{errors["phone"].message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="address1">
                Address
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="text"
                {...register("address1")}
              />
              {errors && errors["address1"] && (
                <span className="text-xs mt-px">
                  {errors["address1"].message}
                </span>
              )}
            </div>
            {/* <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="address2">
                Address 2
              </label>
              <input
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
                type="text"
                {...register("address2")}
              />
              {errors && errors["address2"] && (
                <span className="text-xs mt-px">
                  {errors["address2"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="state">
                State
              </label>
              <select
                id="state"
                name="state"
                className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 border border-neutral-300"
              >
                <option>Select state</option>
                <option value="02">Azua Province</option>
                <option value="03">Baoruco Province</option>
                <option value="04">Barahona Province</option>
                <option value="05">Dajabón Province</option>
                <option value="01">Distrito Nacional</option>
                <option value="06">Duarte Province</option>
                <option value="08">El Seibo Province</option>
                <option value="09">Espaillat Province</option>
                <option value="30">Hato Mayor Province</option>
                <option value="19">Hermanas Mirabal Province</option>
                <option value="10">Independencia</option>
                <option value="11">La Altagracia Province</option>
                <option value="12">La Romana Province</option>
                <option value="13">La Vega Province</option>
                <option value="14">María Trinidad Sánchez Province</option>
                <option value="28">Monseñor Nouel Province</option>
                <option value="15">Monte Cristi Province</option>
                <option value="29">Monte Plata Province</option>
                <option value="16">Pedernales Province</option>
                <option value="17">Peravia Province</option>
                <option value="18">Puerto Plata Province</option>
                <option value="20">Samaná Province</option>
                <option value="21">San Cristóbal Province</option>
                <option value="31">San José de Ocoa Province</option>
                <option value="22">San Juan Province</option>
                <option value="23">San Pedro de Macorís</option>
                <option value="24">Sánchez Ramírez Province</option>
                <option value="25">Santiago Province</option>
                <option value="26">Santiago Rodríguez Province</option>
                <option value="32">Santo Domingo Province</option>
                <option value="27">Valverde Province</option>
              </select>
              {errors && errors["state"] && (
                <span className="text-xs mt-px">{errors["state"].message}</span>
              )}
            </div> */}
          </div>
          <div className="flex flex-col gap-8 mb-8">
            <div className="flex w-full flex-col gap-1">
              <span className="text-sm">Services needed</span>
              <div className="flex flex-col grow bg-neutral-100 rounded-xl border border-neutral-300">
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Company Formation & Legal Structure
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("company_formation")}
                  />
                  {watch("company_formation") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Accounting & Tax Services
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("accounting")}
                  />
                  {watch("accounting") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Permits & Licensing
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("permits")}
                  />
                  {watch("permits") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Immigration & Residency
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("immigration")}
                  />
                  {watch("immigration") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Real Estate & Investment Advisory
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("real_estate")}
                  />
                  <div className="h-[18px] w-[18px] bg-transparent"></div>
                  {watch("real_estate") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
                <label className="relative cursor-pointer flex items-center justify-between hover:bg-theme hover:text-background px-4 py-2 gap-4 even:bg-background even:border-background even:has-checked:border-theme/80 has-checked:bg-theme/80 has-checked:text-background has-checked:border-theme/80 border border-neutral-100 has-checked:has-focus-visible:border-background has-focus-visible:border-theme first:rounded-t-[inherit] last:rounded-b-[inherit]">
                  Banking & Administrative Support
                  <input
                    className="h-0 w-0 absolute opacity-0"
                    type="checkbox"
                    defaultChecked={false}
                    {...register("banking")}
                  />
                  {watch("banking") ? (
                    <FaRegCircleCheck />
                  ) : (
                    <div className="h-[18px] w-[18px] bg-transparent"></div>
                  )}
                </label>
              </div>
              {errors?.company_formation && (
                <span className="text-xs mt-px">
                  {errors.company_formation.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 min-h-[250px] col-span-2">
            <label className="text-sm" htmlFor="description">
              Additional Information
            </label>
            <textarea
              className="bg-neutral-100 rounded-lg px-1 py-0.5 text-zinc-900 h-full border border-neutral-300 grow"
              {...register("description")}
              placeholder="How can we help?"
            />
            {errors && errors["description"] && (
              <span className="text-xs mt-px">
                {errors["description"].message}
              </span>
            )}
          </div>
        </div>

        <button
          disabled={isSubmitting}
          className="bg-theme text-background rounded-xl px-3 py-1 w-fit outline-2 -outline-offset-1 outline-theme hover:outline-offset-2 transition-all cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
