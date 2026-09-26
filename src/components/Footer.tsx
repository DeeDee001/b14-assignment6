import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-[#ccff00] text-black"><Dumbbell size={18} strokeWidth={2.8} /></span>
          <span className="font-display font-black tracking-[0.16em]">FITLOG</span>
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-white/40">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
