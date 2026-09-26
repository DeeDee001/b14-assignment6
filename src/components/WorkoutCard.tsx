import Link from "next/link";
import { Flame, Gauge, Star } from "lucide-react";
import type { Workout } from "@/lib/types";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      <div className="relative aspect-[1.45] overflow-hidden bg-[#1a1a1a]">
        <img src={workout.image} alt={workout.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {workout.muscleGroups.slice(0, 3).map((group) => (
            <span key={group} className="badge rounded-none border-0 bg-[#ccff00] px-2.5 py-2 text-[9px] font-black uppercase tracking-[0.08em] text-black">{group}</span>
          ))}
        </div>
        <span className="absolute bottom-3 right-3 border border-white/20 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">{workout.difficulty}</span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-[1.35rem] font-black uppercase leading-none tracking-[-0.01em]">{workout.name}</h3>
        <p className="mt-2 line-clamp-1 text-xs text-white/40">{workout.equipment}</p>
        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-[0.06em] text-white/55">
          <span className="flex items-center gap-1.5"><Gauge size={13} className="text-[#ccff00]" />{workout.duration} min</span>
          <span className="flex items-center gap-1.5"><Flame size={13} className="text-[#ccff00]" />{workout.caloriesBurned} kcal</span>
          <span className="flex items-center justify-end gap-1.5"><Star size={13} fill="currentColor" className="text-[#ccff00]" />{workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
