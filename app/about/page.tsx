import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import Values from "@/components/sections/about/Values";
import TeamBanner from "@/components/sections/about/TeamBanner";
import StatsStrip from "@/components/sections/about/StatsStrip";
import CTABanner from "@/components/sections/home/CTABanner";

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
