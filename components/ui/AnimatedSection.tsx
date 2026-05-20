"use client";

import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  once?: boolean;
}

const animationClasses: Record<AnimationVariant, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animationClasses[animation] : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
