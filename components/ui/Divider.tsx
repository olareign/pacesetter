interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`flex items-center gap-4 justify-center ${className}`}
      aria-hidden="true"
    >
      <span className="block bg-navy/20 h-px w-12" />
      <span className="text-lime text-lg leading-none">✦</span>
      <span className="block bg-lime/40 h-px w-12" />
    </div>
  );
}
