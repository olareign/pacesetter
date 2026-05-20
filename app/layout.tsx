import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundDecoration from "@/components/ui/BackgroundDecoration";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pacesetter Cleaning Services Ltd",
  description:
    "Professional cleaning services for homes, offices, and commercial spaces.",
  url: "https://pacesettercleaning.co.uk",
  telephone: "07401 234 567",
  email: "info@pacesettercleaning.co.uk",
  areaServed: "UK",
  openingHours: "Mo-Fr 08:00-18:00",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pacesettercleaning.co.uk"),
  title: {
    default:
      "Pacesetter Cleaning Services Ltd | Setting the Standard in Cleaning",
    template: "%s | Pacesetter Cleaning Services Ltd",
  },
  description:
    "Professional cleaning services for homes, offices, and commercial spaces. Reliable, high-quality cleaning solutions you can trust.",
  keywords:
    "cleaning services, professional cleaning, residential cleaning, office cleaning, commercial cleaning, end of tenancy cleaning, deep cleaning, UK",
  openGraph: {
    title: "Pacesetter Cleaning Services Ltd",
    description: "Setting the standard in cleaning",
    url: "https://pacesettercleaning.co.uk",
    siteName: "Pacesetter Cleaning Services Ltd",
    locale: "en_GB",
    type: "website",
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
      <head>
        <meta name="theme-color" content="#1B2F5E" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <BackgroundDecoration />
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-18 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
