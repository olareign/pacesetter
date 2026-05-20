import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const servicesDetail = [
  {
    slug: "residential",
    title: "Residential Cleaning",
    image: "/images/services/residential.jpg",
    description:
      "Your home deserves the best care. Our residential cleaning service covers every room, every surface, and every corner, leaving your home fresh, hygienic, and welcoming. Whether you need a regular weekly clean or a one-off session before guests arrive, our team delivers consistently exceptional results.",
    bullets: [
      "Regular and one-off cleaning available",
      "Eco-friendly products on request",
      "Trusted, vetted cleaners",
    ],
  },
  {
    slug: "office",
    title: "Office Cleaning",
    image: "/images/services/office.jpg",
    description:
      "A clean office is a productive office. We provide flexible, scheduled cleaning contracts for businesses of all sizes, from small studios to multi-floor offices. Our team works around your hours, ensuring minimal disruption to your operations while maintaining a spotless, professional environment.",
    bullets: [
      "Before/after-hours scheduling available",
      "Tailored cleaning plans",
      "Fully insured commercial team",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Cleaning",
    image: "/images/services/commercial.jpg",
    description:
      "From retail spaces to warehouses and facilities, Pacesetter delivers thorough commercial cleaning that meets industry standards. We understand that every commercial space has unique requirements, and we work closely with you to design a cleaning programme that fits your environment and budget.",
    bullets: [
      "Retail, warehouse, and facilities cleaning",
      "Compliance-ready cleaning standards",
      "Flexible contract options",
    ],
  },
  {
    slug: "end-of-tenancy",
    title: "End of Tenancy Cleaning",
    image: "/images/services/end-of-tenancy.jpg",
    description:
      "Moving out? Our end of tenancy cleaning service is designed to meet the strict requirements of letting agents and landlords, giving you the best chance of getting your full deposit back. We clean every inch of the property to the highest standard, from oven interiors to skirting boards.",
    bullets: [
      "Letting agent standard cleaning checklist",
      "Oven, fridge, and appliance cleaning included",
      "Certificate of clean available on request",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    image: "/images/services/deep-cleaning.jpg",
    description:
      "When a standard clean isn't enough, our deep cleaning service provides an intensive, top-to-bottom transformation of any space. Perfect for post-construction, pre-move-in, seasonal cleans, or any situation where a thorough reset is needed. No surface is overlooked, no corner is forgotten.",
    bullets: [
      "Full property deep cleans",
      "Post-construction and pre-move-in cleans",
      "Ideal for kitchens, bathrooms, and high-traffic areas",
    ],
  },
];

export default function ServiceDetails() {
  return (
    <section className="bg-white py-20 lg:py-28">
      {servicesDetail.map((service, index) => (
        <div
          key={service.slug}
          id={service.slug}
          className={`${index < servicesDetail.length - 1 ? "border-b border-surface" : ""} ${index > 0 ? "pt-20 lg:pt-28" : ""} pb-0`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div>
                  <p className="text-lime font-display text-sm font-semibold uppercase tracking-widest mb-3">
                    Our Services
                  </p>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-navy mb-5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body text-text-dark/65 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="bg-lime/10 rounded-full p-1 shrink-0 mt-0.5">
                          <CheckCircle2 className="text-lime" size={15} />
                        </span>
                        <span className="font-body text-text-dark/70 text-sm">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold uppercase tracking-wider text-sm bg-linear-to-r from-lime to-lime-dark text-white shadow-lg shadow-lime/25 hover:shadow-xl hover:shadow-lime/30 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection
                animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
                delay={150}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative group">
                  <div className="absolute -inset-3 bg-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden bg-surface">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Pacesetter Cleaning Services`}
                      width={600}
                      height={450}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
