import type { Metadata } from "next";
import { Barlow_Condensed, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ContactBar } from "@/components/ContactBar";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  weight: "600",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClearPath Consulting",
  description: "ClearPath Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${nunito.variable} antialiased`}>
        <ContactBar />
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
