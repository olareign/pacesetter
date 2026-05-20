import { Phone, Mail, MessageSquare, Camera, Music2, MessageCircle } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const socialIconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Camera,
  Music2,
  MessageCircle,
};

export default function ContactInfo() {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl lg:text-3xl text-navy mb-2">
        Get in Touch
      </h2>
      <p className="font-body text-text-dark/50 text-sm mb-10">
        Prefer to call or email? Here&apos;s how to reach us.
      </p>

      <div className="space-y-6 mb-12">
        <AnimatedSection animation="fade-in-left" delay={0}>
          <div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-surface/50 transition-colors duration-200">
            <div className="bg-lime/10 group-hover:bg-lime/20 rounded-xl w-14 h-14 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
              <Phone className="text-lime" size="22" />
            </div>
            <div>
              <p className="font-display font-semibold text-navy text-sm mb-1">
                Phone
              </p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="font-body text-text-dark/60 text-sm hover:text-lime transition-colors duration-200"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-left" delay={100}>
          <div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-surface/50 transition-colors duration-200">
            <div className="bg-lime/10 group-hover:bg-lime/20 rounded-xl w-14 h-14 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
              <Mail className="text-lime" size="22" />
            </div>
            <div>
              <p className="font-display font-semibold text-navy text-sm mb-1">
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-body text-text-dark/60 text-sm hover:text-lime transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div>
        <p className="font-display font-semibold text-navy text-sm mb-5">
          Follow Us
        </p>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white/70 rounded-xl w-12 h-12 flex items-center justify-center hover:bg-lime hover:text-white hover:shadow-lg hover:shadow-lime/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {Icon && <Icon size="18" />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
