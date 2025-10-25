"use server";

import { SendEmailCommandInput, SES } from "@aws-sdk/client-ses";
import { ContactFormValues } from "./contactSchema";
import { render } from "@react-email/components";
import { ContactEmail } from "./ContactEmailTemplate";

const credentials = {
  accessKeyId: process.env.SES_ACCESS_KEY || "",
  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
};

const devMode = process.env.NODE_ENV === "development";

export async function sendSESEmail(formData: ContactFormValues) {
  let sent = false;

  try {
    const params: SendEmailCommandInput = {
      Destination: {
        ToAddresses: ["devin@tidalsites.com"],
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
          Data: devMode ? "Contact Request - DEV MODE" : "Contact Request",
        },
      },
      Source: "devin@tidalsites.com",
      ReturnPath: "bounce@mail.tidalsites.com",
      ReplyToAddresses: ["devin@tidalsites.com"],
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
