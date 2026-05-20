import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/sections/about/OurStory";

const Values = dynamic(() => import("@/components/sections/about/Values"), { ssr: true });
const TeamBanner = dynamic(() => import("@/components/sections/about/TeamBanner"), { ssr: true });
const StatsStrip = dynamic(() => import("@/components/sections/about/StatsStrip"), { ssr: true });
const CTABanner = dynamic(() => import("@/components/sections/home/CTABanner"), { ssr: true });

export const metadata: Metadata = {
  title: "About Us | Pacesetter Cleaning Services Ltd",
  description:
    "Learn about Pacesetter Cleaning Services Ltd — our story, values, and commitment to delivering professional, reliable cleaning across the UK.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our story, our values, our commitment to you"
        breadcrumb="About"
      />
      <OurStory />
      <Values />
      <TeamBanner />
      <StatsStrip />
      <CTABanner />
    </>
  );
}
