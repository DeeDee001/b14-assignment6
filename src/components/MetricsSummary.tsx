import { Flame, ListChecks, Timer } from "lucide-react";

export function MetricsSummary({ exercises, minutes, calories }: { exercises: number; minutes: number; calories: number }) {
  const stats = [
    { label: "Exercises", value: exercises, icon: ListChecks },
    { label: "Minutes", value: minutes, icon: Timer },
    { label: "Calories", value: calories, icon: Flame },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="border border-white/10 bg-[#111] p-4 sm:p-5">
          <Icon size={16} className="mb-5 text-[#ccff00]" />
          <p className="font-display text-3xl font-black leading-none sm:text-4xl">{value}</p>
          <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">{label}</p>
        </div>
      ))}
    </div>
  );
}
