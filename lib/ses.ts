"use server";

import { SendEmailCommandInput, SES } from "@aws-sdk/client-ses";
import { ContactFormValues } from "./contactSchema";
import { render } from "@react-email/components";
import { ContactEmail } from "./ContactEmailTemplate";

const credentials = {
  accessKeyId: process.env.SES_ACCESS_KEY || "",
  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
};

export async function sendSESEmail(formData: ContactFormValues) {
  let sent = false;

  try {
    const params: SendEmailCommandInput = {
      Destination: {
        ToAddresses: ["info@myclearpath.co"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: await render(ContactEmail({ ...formData })),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Contact Request",
        },
      },
      Source: "no-reply@myclearpath.co",
      ReplyToAddresses: [formData.email],
    };

    const ses = new SES({
      region: "us-east-1",
      credentials,
    });

    await ses.sendEmail(params);
    sent = true;
  } catch (e) {
    console.log(e);
  }

  return sent;
}
