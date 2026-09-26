export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col items-center justify-center px-5">
      <span className="loading loading-spinner loading-lg text-[#ccff00]" />
      <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-white/40">Loading workouts…</p>
    </div>
  );
}
