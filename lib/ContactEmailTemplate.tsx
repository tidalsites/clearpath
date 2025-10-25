import { TContactSchema } from "./contactSchema";
import {
  Body,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const ContactEmail = ({
  first_name,
  last_name,
  email,
  phone,
  description,
}: TContactSchema) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Request</Preview>
      <Tailwind>
        <Body>
          <Section className="bg-black text-white w-full text-center rounded-lg">
            <Heading className="text-2xl">{`${first_name} ${last_name} is reaching out to you`}</Heading>
          </Section>
          <Section>
            <Row className="flex gap-4 my-8">
              <Column className="p-4 rounded-lg w-fit">
                <Text className="text-lg w-fit">User Details:</Text>
                <Text>First Name: {first_name}</Text>
                <Text>Last Name: {last_name}</Text>
                <Text>Email: {email}</Text>
                <Text>Phone Number: {phone}</Text>
              </Column>
            </Row>
            <Row>
              <Column className="p-4 rounded-lg w-fit">
                <Text className="text-lg w-fit">User Request:</Text>
                <Text className="max-w-prose">{description}</Text>
              </Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};
