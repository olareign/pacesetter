import { ShieldCheck, Sparkles, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const usps = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "Consistent, on-time service you can count on every visit.",
  },
  {
    icon: Sparkles,
    title: "Professional",
    description: "Trained, vetted, and uniformed cleaners who take pride in their work.",
  },
  {
    icon: Clock,
    title: "Detail-Oriented",
    description: "Every corner, every surface — nothing is overlooked.",
  },
];

export default function USPStrip() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {usps.map((usp, i) => (
            <AnimatedSection key={usp.title} animation="fade-in-up" delay={i * 100}>
              <div className="group text-center p-6 lg:p-8">
                <div className="bg-lime/10 group-hover:bg-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <usp.icon className="text-lime" size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">
                  {usp.title}
                </h3>
                <p className="font-body text-text-dark/60 leading-relaxed text-sm">
                  {usp.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
