import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    quote: "Fantastic service from start to finish. Our office has never looked this clean!",
    name: "Sarah T.",
    service: "Office Cleaning",
  },
  {
    quote: "The end of tenancy clean was thorough and professional. Got our full deposit back!",
    name: "James R.",
    service: "End of Tenancy Cleaning",
  },
  {
    quote: "Reliable, detail-oriented, and always on time. Highly recommend Pacesetter.",
    name: "Emma L.",
    service: "Residential Cleaning",
  },
];

export default function TestimonialsTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-14">
            <p className="text-lime font-display text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Testimonials
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy">
              What Our Clients Say
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} animation="fade-in-up" delay={i * 100}>
              <div className="group bg-surface rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-lime" size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="font-body text-text-dark/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/60 pt-4">
                  <p className="font-display font-semibold text-navy text-sm">{t.name}</p>
                  <p className="font-body text-text-dark/40 text-xs">{t.service}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="text-center mt-12">
            <Button href="/testimonials" variant="secondary">
              Read More Reviews
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
