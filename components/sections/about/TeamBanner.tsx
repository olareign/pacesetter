import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TeamBanner() {
  return (
    <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/about/team-banner.jpg"
        alt="Pacesetter cleaning team at work"
        fill
        className="object-cover transition-transform duration-[2s] hover:scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/70 to-navy/80" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fade-in-up">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
            A Team You Can Trust
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={150}>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Every member of the Pacesetter team is carefully selected, trained,
            and committed to delivering the same high standard of service on every
            visit.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
