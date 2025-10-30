import { z } from "zod";

const services = z.object({
  company_formation: z.boolean().catch(false),
  accounting: z.boolean().catch(false),
  permits: z.boolean().catch(false),
  immigration: z.boolean().catch(false),
  real_estate: z.boolean().catch(false),
  banking: z.boolean().catch(false),
});

export const ContactSchema = z
  .object({
    first_name: z.string().min(1, "Required"),
    last_name: z.string().min(1, "Required"),
    email: z
      .email()
      .min(4, "Required")
      .max(50, "Cannot be more than 50 characters"),
    phone: z.string().max(13, "Cannot be more than 13 characters"),
    address1: z.string(),
    // address2: z.string(),
    // state: z.string(),
    description: z.string().min(1, "Required").max(1000),
  })
  .and(services)
  .superRefine((val, ctx) => {
    const picked =
      val.company_formation ||
      val.accounting ||
      val.permits ||
      val.immigration ||
      val.real_estate ||
      val.banking;

    if (!picked) {
      // attach the error to one field so RHF can show it near the group
      ctx.addIssue({
        code: "custom",
        path: ["company_formation"],
        message: "Select at least one service",
      });
    }
  });

export type ContactFormValues = z.input<typeof ContactSchema>;
export type ContactData = z.output<typeof ContactSchema>;
