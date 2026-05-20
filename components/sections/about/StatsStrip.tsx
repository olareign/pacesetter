import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "500+", label: "Cleans Completed" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "5★", label: "Average Client Rating" },
  { value: "Fully", label: "Insured & Vetted" },
];

export default function StatsStrip() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-in-up"
              delay={index * 100}
              className={`text-center py-4 lg:py-0 ${
                index < stats.length - 1
                  ? "lg:border-r lg:border-white/10"
                  : ""
              }`}
            >
              <p className="font-display font-extrabold text-4xl lg:text-5xl text-lime mb-2">
                {stat.value}
              </p>
              <p className="font-body font-medium text-white/60 text-sm">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
        <p className="text-center font-body text-white/20 text-xs mt-8">
          {/* TODO: update with real figures */}
        </p>
      </div>
    </section>
  );
}
