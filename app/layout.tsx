import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Hireme from "./components/Hireme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Chavan - Web Developer Portfolio",
  description:
    "Welcome to the portfolio of Shubham Chavan, a skilled web developer specializing in Next.js and React.js. Explore my projects and skills!",
  keywords:
    "web developer, next.js developer, react developer, portfolio, web development, frontend developer, full stack developer, responsive web design, Shubham Chavan, India",
  image: "/og-image.png", // Path to your Open Graph image
  site_name: "Shubham Chavan Portfolio",
  type: "website",
  url: "https://shubhamzone.vercel.app", // Replace with your actual website URL};
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://shubhamzone.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="shubham chavan | portfolio" />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Shubham Chavan, a skilled web developer specializing in Next.js and React.js. With a focus on creating efficient web solutions."
        />
        <meta
          property="og:image"
          content="https://shubhamzone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme2.0b373a5a.jpg&w=3840&q=75"
        />
        <meta property="og:image:width" content="3119" />
        <meta property="og:image:height" content="4160" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="shubhamzone.vercel.app" />
        <meta
          property="twitter:url"
          content="https://shubhamzone.vercel.app/"
        />
        <meta name="twitter:title" content="shubham chavan | portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to the portfolio of Shubham Chavan, a skilled web developer specializing in Next.js and React.js. With a focus on creating efficient web solutions."
        />
        <meta
          name="twitter:image"
          content="https://shubhamzone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme2.0b373a5a.jpg&w=3840&q=75"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="author" content="Shubham Chavan" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="google-site-verification" content="nt8Dh8KJgelsqisLmAV66gQwYzSEwUat2GCwXvJ2MKE" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        
        <Navbar />
        {children}
        <Hireme/>
        <Footer />
      </body>
    </html>
  );
}
