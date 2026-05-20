import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1B2F5E,#0D1F45)]" />

      <div className="absolute top-20 right-0 w-125 h-125 bg-lime/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-100 h-100 bg-white/3 rounded-full blur-[100px]" />

      <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-lime/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-[20%] w-4 h-4 bg-lime/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in-up">
              <p className="text-lime/80 font-display text-sm uppercase tracking-[0.25em] mb-6">
                Pacesetter Cleaning Services Ltd
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Setting the Standard{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-lime to-lime-light">
                  in Cleaning
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                Professional, reliable cleaning services for homes, offices, and
                commercial spaces. Let us handle the dirt while you enjoy the shine.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-display font-semibold uppercase tracking-wider text-sm bg-linear-to-r from-lime to-lime-dark text-white shadow-lg shadow-lime/25 hover:shadow-xl hover:shadow-lime/30 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-display font-semibold uppercase tracking-wider text-sm border-2 border-white/20 text-white/80 hover:bg-white hover:text-navy hover:border-white transition-all duration-300 active:scale-[0.97]"
                >
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
