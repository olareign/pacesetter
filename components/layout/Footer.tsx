import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Divider from "@/components/ui/Divider";
import Logo from "@/components/ui/Logo";

const iconMap: Record<string, React.ElementType> = {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="md:col-span-1">
              <div className="w-full bg-white">
                <Logo className="h-15 w-auto" />
              </div>
              <p className="font-body text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
                <span className="font-bold text-lg text-white">Setting the standard<span className="text-lime"> in cleaning.</span></span>
                <br/>Professional, reliable cleaning
                services for homes, offices, and commercial spaces across the UK.
              </p>
            </div>

            <div>
              <p className="font-display font-semibold text-sm text-white/80 uppercase tracking-wider mb-5">
                Quick Links
              </p>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-lime transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-display font-semibold text-sm text-white/80 uppercase tracking-wider mb-5">
                Connect
              </p>
              <div className="flex gap-3 mb-6">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      aria-label={social.platform}
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-lime hover:text-white transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
              <p className="font-body text-xs text-white/30 leading-relaxed">
                Follow us on social media for updates, tips, and special offers.
              </p>
            </div>
          </div>

          <Divider className="my-10" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-white/30">
              &copy; {new Date().getFullYear()} Pacesetter Cleaning Services Ltd. All rights reserved.
            </p>
            <p className="font-body text-xs text-white/20">
              Built with care in the UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
