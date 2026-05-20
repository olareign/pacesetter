import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <p className="text-lime font-display text-sm font-semibold uppercase tracking-widest mb-2">
          Error 404
        </p>
        <h1 className="font-display font-bold text-4xl lg:text-5xl text-navy mb-5 leading-tight">
          Page Not Found
        </h1>
        <p className="font-body text-text-dark/60 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help
          you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-display font-semibold uppercase tracking-wider text-sm bg-linear-to-r from-lime to-lime-dark text-white shadow-lg shadow-lime/25 hover:shadow-xl hover:shadow-lime/30 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-display font-semibold uppercase tracking-wider text-sm border-2 border-navy/20 text-navy/70 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 active:scale-[0.97]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
