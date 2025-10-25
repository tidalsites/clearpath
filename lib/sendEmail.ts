"use server";

import { ContactSchema, ContactFormValues } from "./contactSchema";
import { ZodError } from "zod";
import { sendSESEmail } from "./ses";

type ContactResponse = {
  success: boolean;
  error?: ZodError<ContactFormValues> | string | null;
  data?: unknown;
};

export const sendContactEmail = async (
  formData: ContactFormValues
): Promise<ContactResponse> => {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  try {
    const sent = await sendSESEmail(formData);
    if (sent) {
      return { success: true, error: null };
    }
    return { success: true };
  } catch (error) {
    let returnedError = "Unknown error occurred";

    if (error instanceof Error) {
      returnedError = error.message;
    }

    if (Array.isArray(error)) {
      returnedError = error.join(",");
    }

    if (typeof error === "string") {
      returnedError = error;
    }
    return { success: false, error: returnedError };
  }
};
