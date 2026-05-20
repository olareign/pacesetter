import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesGrid() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} animation="fade-in-up" delay={i * 80}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`#${service.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
