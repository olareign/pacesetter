import Link from "next/link";
import * as Icons from "lucide-react";
import type { ElementType } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, ElementType>)[icon];

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 border-t-[3px] border-lime/80 p-7 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lime/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        {IconComponent && (
          <div className="bg-navy/5 group-hover:bg-navy/10 rounded-xl w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300">
            <IconComponent className="text-navy group-hover:text-lime transition-colors duration-300" size={24} />
          </div>
        )}
        <h3 className="font-display font-bold text-lg text-navy mb-3">
          {title}
        </h3>
        <p className="font-body text-text-dark/65 text-sm leading-relaxed flex-1">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-1.5 text-lime font-display text-sm font-semibold uppercase tracking-wide group-hover:gap-2.5 transition-all duration-300"
          >
            Learn More
            <span className="text-lg leading-none">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
