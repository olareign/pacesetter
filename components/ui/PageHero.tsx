import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1B2F5E,#0D1F45)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="relative py-24 lg:py-32 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {breadcrumb && (
            <p className="text-xs text-lime/70 uppercase tracking-widest mb-4 font-display font-semibold">
              {breadcrumb}
            </p>
          )}
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
              {title}
            </h1>
          </AnimatedSection>
          {subtitle && (
            <AnimatedSection animation="fade-in-up" delay={150}>
              <p className="font-body text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
