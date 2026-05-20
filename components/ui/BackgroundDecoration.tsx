export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] text-lime/[0.02]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="currentColor" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[400px] h-[400px] text-navy/[0.03]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="200" r="150" fill="currentColor" />
      </svg>

      <div className="absolute top-1/3 left-[5%] w-px h-32 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      <div className="absolute top-2/3 right-[8%] w-px h-24 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      <div className="absolute top-1/4 right-[12%] w-2 h-2 rounded-full bg-lime/10" />
      <div className="absolute bottom-1/4 left-[15%] w-3 h-3 rounded-full bg-lime/10" />

      <svg
        className="absolute top-[15%] right-[20%] w-16 h-16 text-navy/[0.02]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>

      <svg
        className="absolute bottom-[20%] right-[30%] w-12 h-12 text-lime/[0.03]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
}
