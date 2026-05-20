import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pacesetter Cleaning Services Ltd | Setting the Standard in Cleaning",
  description:
    "Professional cleaning services for homes, offices, and commercial spaces. Reliable, high-quality cleaning solutions you can trust.",
  keywords:
    "cleaning services, professional cleaning, residential cleaning, office cleaning, commercial cleaning, end of tenancy cleaning, deep cleaning, UK",
  openGraph: {
    title: "Pacesetter Cleaning Services Ltd",
    description: "Setting the standard in cleaning",
    url: "https://pacesettercleaning.co.uk",
    siteName: "Pacesetter Cleaning Services Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
