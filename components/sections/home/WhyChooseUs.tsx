import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const reasons = [
  "Fully insured and vetted cleaning professionals",
  "Eco-friendly cleaning products available on request",
  "Flexible scheduling to suit your lifestyle",
  "Satisfaction guaranteed on every clean",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <AnimatedSection animation="fade-in-left">
            <div>
              <p className="text-lime font-display text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy mb-6 leading-tight">
                Why Choose Pacesetter?
              </h2>
              <ul className="space-y-4 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="bg-lime/10 rounded-full p-1 shrink-0 mt-0.5">
                      <CheckCircle2 className="text-lime" size={16} />
                    </span>
                    <span className="font-body text-text-dark/70 leading-relaxed">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="secondary">
                Learn More About Us
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-lime/5 rounded-3xl" />
              <div className="relative bg-surface rounded-2xl h-[400px] lg:h-[480px] flex items-center justify-center text-text-dark/30 font-body overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#6BBF3E/5,_transparent_70%)]" />
                <span className="relative">Image — add next/image</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
