import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { ContactFormValues } from "./contactSchema";
import { CSSProperties } from "react";

export const ContactEmail = ({
  first_name,
  last_name,
  email,
  phone,
  address1,
  description,
  ...rest
}: ContactFormValues) => {
  function makePretty(value: string): string {
    return value
      .split("_")
      .map((v) => v.substring(0, 1).toUpperCase().concat(v.slice(1)))
      .join(" ");
  }

  const card: CSSProperties = {
    margin: "0 auto",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
  };

  const h2: CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    margin: "0 0 8px",
  };
  const label: CSSProperties = {
    color: "#6b7280",
    width: "160px",
    padding: "4px 0",
    verticalAlign: "top",
  };
  const value: CSSProperties = { color: "#111827", padding: "4px 0" };
  const chip: CSSProperties = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "9999px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    fontSize: "13px",
    lineHeight: "1",
    margin: "0 8px 8px 0",
  };

  const divider: CSSProperties = { borderColor: "#f3f4f6", margin: "16px 0" };

  return (
    <Html>
      <Head />
      <Preview>New Contact Request</Preview>
      <Body
        style={{
          margin: 0,
          padding: "24px",
          backgroundColor: "#f3f4f6",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <Container style={card}>
          <Section>
            <Text style={h2}>User details</Text>
            <table
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
            >
              <tbody>
                <tr>
                  <td style={label}>Name</td>
                  <td style={value}>
                    {first_name || last_name
                      ? `${first_name ?? ""} ${last_name ?? ""}`.trim()
                      : "—"}
                  </td>
                </tr>
                <tr>
                  <td style={label}>Email</td>
                  <td style={value}>{email}</td>
                </tr>
                <tr>
                  <td style={label}>Phone</td>
                  <td style={value}>{phone || "—"}</td>
                </tr>
                <tr>
                  <td style={label}>Address</td>
                  <td style={value}>{address1 || "—"}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr style={divider} />

          <Section>
            <Text style={h2}>Services requested</Text>
            {Object.entries(rest)
              .filter((arr) => arr[1])
              .map((arr) => arr[0])
              .map((k) => (
                <Text style={chip} key={k}>
                  {makePretty(k)}
                </Text>
              ))}
          </Section>

          <Hr style={divider} />

          <Section>
            <Text style={h2}>Description</Text>
            <div
              style={{
                color: "#111827",
                lineHeight: 1.6,
                maxWidth: "60ch",
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
