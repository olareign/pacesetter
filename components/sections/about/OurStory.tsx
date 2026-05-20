import Image from "next/image";
import Divider from "@/components/ui/Divider";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function OurStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <AnimatedSection animation="fade-in-left">
            <div>
              <p className="text-lime font-display text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                Our Story
              </p>
              <Divider />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-navy mt-5 mb-6 leading-tight">
                Setting the Standard, Every Single Time
              </h2>
              <div className="font-body text-text-dark/65 leading-relaxed space-y-4">
                <p>
                  At Pace Setter Cleaning Services LTD, we are committed to
                  delivering reliable, professional, and high-quality cleaning
                  solutions tailored to homes, offices, and commercial spaces.
                  With a focus on excellence, attention to detail, and customer
                  satisfaction, we take pride in creating clean, safe, and
                  welcoming environments.
                </p>
                <p>
                  Our dedicated team combines efficiency with professionalism to
                  provide services you can trust every time. We believe that a
                  truly clean space does more than look good — it creates an
                  environment where people feel comfortable, focused, and at ease.
                  That belief drives everything we do.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={150}>
            <div className="relative group">
              <div className="absolute -inset-3 bg-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden bg-surface">
                <Image
                  src="/images/about/our-story.jpg"
                  alt="Pacesetter professional cleaning team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
