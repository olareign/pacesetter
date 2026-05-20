import { Heart, ShieldCheck, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Everything we do starts with you. We listen, we adapt, and we work until you're completely satisfied.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description:
      "Our team is fully vetted, insured, and trained to the highest standards. You can open your door with confidence.",
  },
  {
    icon: Zap,
    title: "Efficiency & Excellence",
    description:
      "We respect your time. Our processes are sharp, our results are consistent, and our standards never slip.",
  },
];

export default function Values() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-in-up">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy mb-3">
            What We Stand For
          </h2>
          <p className="font-body text-text-dark/50 mb-14 text-lg">
            The principles that guide every clean we deliver.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} animation="fade-in-up" delay={i * 100}>
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-[transform,box-shadow] duration-500 p-8 lg:p-10 border-t-[3px] border-lime/80 hover:-translate-y-1">
                <div className="bg-lime/10 group-hover:bg-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <value.icon className="text-lime" size={30} />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-text-dark/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
