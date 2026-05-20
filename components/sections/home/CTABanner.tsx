import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative bg-navy overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#1B2F5E,_#0D1F45)]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
      <div className="relative text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready for a Spotless Clean?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={150}>
            <p className="font-body text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get your free, no-obligation quote today and experience the
              Pacesetter difference.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={250}>
            <Button href="/contact" variant="primary-gradient">
              Get a Free Quote
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
