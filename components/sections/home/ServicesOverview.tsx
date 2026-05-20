import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import Divider from "@/components/ui/Divider";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ServicesOverview() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-14">
            <Divider />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy mt-5 mb-4">
              Our Cleaning Services
            </h2>
            <p className="font-body text-text-dark/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive cleaning solutions tailored to your needs — from
              routine maintenance to intensive deep cleans.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} animation="fade-in-up" delay={i * 80}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href="/services"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
