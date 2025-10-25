"use server";

import { SendEmailCommandInput, SES } from "@aws-sdk/client-ses";
import { ContactFormValues } from "./contactSchema";

const credentials = {
  accessKeyId: process.env.SES_ACCESS_KEY || "",
  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
};

const devMode = process.env.NODE_ENV === "development";

export async function sendSESEmail(formData: ContactFormValues) {
  let sent = false;

  const { first_name, last_name, email, phone, description } = formData;
  try {
    const params: SendEmailCommandInput = {
      Destination: {
        ToAddresses: ["devin@tidalsites.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: generateTemplateEmail({
              first_name,
              last_name,
              email,
              phone,
              description,
            }),
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

type EmailParameters = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  description: string;
};

function generateTemplateEmail({
  first_name,
  last_name,
  email,
  phone,
  description,
}: EmailParameters) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
            <main style="display: flex; flex-direction: column; gap: 1rem;">
                <p>Contact Form Request from ${first_name} ${last_name}</p>
                <p>Email Address: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>Description: ${description}</p>
            </main>
        </body>
    </html>
`;
}
