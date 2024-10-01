import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/lib/SessionWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>{children}</body>
      </SessionWrapper>
    </html>
  );
}
