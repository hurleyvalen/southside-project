import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "South Side Brews",
  description: "Café in the heart of Timugan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children} <Toaster />
      </body>
    </html>
  );
}
