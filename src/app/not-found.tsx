import Link from "next/link";

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-[900px] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">404 / Route not found</p>
      <h1 className="mt-4 font-display text-[clamp(5rem,18vw,12rem)] font-black leading-none">404</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-white/45">That route is not part of the FitLog training floor.</p>
      <Link href="/" className="btn mt-7 inline-flex items-center gap-2 rounded-none border-0 bg-[#ccff00] font-black uppercase text-black">
        <ArrowLeftIcon />
        Back to library
      </Link>
    </section>
  );
}
