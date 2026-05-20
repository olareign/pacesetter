import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  link?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  link = true,
  variant = "dark",
}: LogoProps) {
  const logo = (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/logo.svg"
        alt="Pacesetter Cleaning Services Ltd"
        width={250}
        height={48}
        className="object-contain w-full h-full"
        style={{
          filter: variant === "light" ? "brightness(0) invert(1)" : undefined,
        }}
        unoptimized
        priority
      />
    </div>
  );

  if (link) {
    return <Link href="/">{logo}</Link>;
  }

  return logo;
}
