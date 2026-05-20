import { Phone, MessageCircle, Mail, MessageSquare, Camera, Music2 } from "lucide-react";
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
          <div className="group p-5 -mx-4 rounded-xl hover:bg-surface/50 transition-colors duration-200">
            <div className="flex items-start gap-4">
              <div className="bg-lime/10 group-hover:bg-lime/20 rounded-xl w-14 h-14 flex items-center justify-center shrink-0 transition-[transform,background-color] duration-300 group-hover:scale-110">
                <Phone className="text-lime" size="22" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-navy text-sm mb-3">
                  Call or WhatsApp
                </p>
                <div className="space-y-2">
                  {[CONTACT.phone, CONTACT.phoneAlt].map((number) => (
                    <div key={number} className="flex items-center justify-between bg-white rounded-lg border border-surface px-3.5 py-2.5 group/row hover:border-lime/30 hover:shadow-sm transition-all duration-200">
                      <span className="font-body text-text-dark/70 text-sm font-medium">
                        {number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`tel:${number.replace(/\s/g, "")}`}
                          className="p-1.5 rounded-md text-text-dark/40 hover:text-lime hover:bg-lime/5 transition-colors duration-200"
                          aria-label={`Call ${number}`}
                        >
                          <Phone size={14} />
                        </a>
                        <a
                          href={`https://wa.me/${number.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-text-dark/40 hover:text-lime hover:bg-lime/5 transition-colors duration-200"
                          aria-label={`WhatsApp ${number}`}
                        >
                          <MessageCircle size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-left" delay={100}>
          <div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-surface/50 transition-colors duration-200">
            <div className="bg-lime/10 group-hover:bg-lime/20 rounded-xl w-14 h-14 flex items-center justify-center shrink-0 transition-[transform,background-color] duration-300 group-hover:scale-110">
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
                className="bg-navy text-white/70 rounded-xl w-12 h-12 flex items-center justify-center hover:bg-lime hover:text-white hover:shadow-lg hover:shadow-lime/25 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5"
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
