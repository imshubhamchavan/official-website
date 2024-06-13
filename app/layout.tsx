import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubhamzone",
  description: "Personal portfolio",
  icons: {
    icon: '../public/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
