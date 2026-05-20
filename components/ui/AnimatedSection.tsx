"use client";

import { useRef, useEffect, useState } from "react";

type AnimationVariant = "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "stagger";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  once?: boolean;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-in-up": {
    hidden: "opacity-0 translate-y-[30px]",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in-left": {
    hidden: "opacity-0 -translate-x-[30px]",
    visible: "opacity-100 translate-x-0",
  },
  "fade-in-right": {
    hidden: "opacity-0 translate-x-[30px]",
    visible: "opacity-100 translate-x-0",
  },
  "scale-in": {
    hidden: "opacity-0 scale-[0.92]",
    visible: "opacity-100 scale-100",
  },
  stagger: {
    hidden: "opacity-0 translate-y-[20px]",
    visible: "opacity-100 translate-y-0",
  },
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: "-50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variant = variantStyles[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? variant.visible : variant.hidden}`}
      style={{
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
