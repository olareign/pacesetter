import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHero from "@/components/ui/PageHero";
import ServicesIntro from "@/components/sections/services/ServicesIntro";

const ServicesGrid = dynamic(() => import("@/components/sections/services/ServicesGrid"), { ssr: true });
const ServiceDetails = dynamic(() => import("@/components/sections/services/ServiceDetails"), { ssr: true });
const CTABanner = dynamic(() => import("@/components/sections/home/CTABanner"), { ssr: true });

export const metadata: Metadata = {
  title: "Our Services | Pacesetter Cleaning Services Ltd",
  description:
    "From residential and office cleaning to end of tenancy and deep cleaning — professional cleaning services tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Professional cleaning solutions for every space"
        breadcrumb="Services"
      />
      <ServicesIntro />
      <ServicesGrid />
      <ServiceDetails />
      <CTABanner />
    </>
  );
}
