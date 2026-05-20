import dynamic from "next/dynamic";
import Hero from "@/components/sections/home/Hero";
import USPStrip from "@/components/sections/home/USPStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";

const WhyChooseUs = dynamic(() => import("@/components/sections/home/WhyChooseUs"), { ssr: true });
const TestimonialsTeaser = dynamic(() => import("@/components/sections/home/TestimonialsTeaser"), { ssr: true });
const CTABanner = dynamic(() => import("@/components/sections/home/CTABanner"), { ssr: true });

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
