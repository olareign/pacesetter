import Hero from "@/components/sections/home/Hero";
import USPStrip from "@/components/sections/home/USPStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import TestimonialsTeaser from "@/components/sections/home/TestimonialsTeaser";
import CTABanner from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <USPStrip />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsTeaser />
      <CTABanner />
    </>
  );
}
