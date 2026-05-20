import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "primary-gradient";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold uppercase tracking-wider text-sm transition-[transform,box-shadow,background-color,color,border-color] duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 active:scale-[0.97]";

const variants: Record<ButtonVariant, string> = {
  "primary-gradient":
    "bg-linear-to-r from-lime to-lime-dark text-white shadow-lg shadow-lime/25 hover:shadow-xl hover:shadow-lime/30 hover:brightness-110",
  primary:
    "bg-lime text-white hover:bg-lime-dark shadow-md shadow-lime/20 hover:shadow-lg hover:shadow-lime/25",
  secondary:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost:
    "border-2 border-white/30 text-white hover:bg-white hover:text-navy hover:border-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
