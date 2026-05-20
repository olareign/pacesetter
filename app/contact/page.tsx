import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

const CTABanner = dynamic(() => import("@/components/sections/home/CTABanner"), { ssr: true });

export const metadata: Metadata = {
  title: "Contact Us | Pacesetter Cleaning Services Ltd",
  description:
    "Get in touch with Pacesetter Cleaning Services for a free quote. Call, email, or fill in our contact form and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quote"
        breadcrumb="Contact"
      />
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
