import Divider from "@/components/ui/Divider";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-in-up">
          <Divider />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy mt-5 mb-5">
            Cleaning Solutions Built Around You
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={100}>
          <p className="font-body text-text-dark/60 leading-relaxed text-lg">
            Whether you need a one-off deep clean, regular home maintenance, or a
            contract cleaning solution for your business, Pacesetter delivers
            consistent, high-quality results. Explore our services below and get in
            touch for a free, tailored quote.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
