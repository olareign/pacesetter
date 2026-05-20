import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesIntro from "@/components/sections/services/ServicesIntro";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServiceDetails from "@/components/sections/services/ServiceDetails";
import CTABanner from "@/components/sections/home/CTABanner";

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
