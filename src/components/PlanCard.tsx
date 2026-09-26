 "use client";

import Link from "next/link";
import { Check, Flame, Gauge, Star, X } from "lucide-react";
import type { Workout } from "@/lib/types";
import { useFitLog } from "@/context/FitLogContext";

export function PlanCard({ workout, done = false, saved = false }: { workout: Workout; done?: boolean; saved?: boolean }) {
  const { markDone, removeFromPlan, removeFromSaved } = useFitLog();

  return (
    <article className={`group grid gap-0 border border-white/10 bg-[#111] sm:grid-cols-[170px_1fr] ${done ? "opacity-60" : ""}`}>
      <Link href={`/workouts/${workout.id}`} className="relative min-h-40 overflow-hidden sm:min-h-full">
        <img src={workout.image} alt={workout.name} className="absolute inset-0 h-full w-full object-cover grayscale transition group-hover:scale-105 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {done && <span className="absolute left-3 top-3 badge rounded-none border-0 bg-[#ccff00] text-black">DONE</span>}
      </Link>
      <div className="flex min-w-0 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups.slice(0, 3).map((tag) => <span key={tag} className="text-[9px] font-black uppercase tracking-[0.1em] text-[#ccff00]">{tag}</span>)}
          </div>
          <Link href={`/workouts/${workout.id}`} className={`mt-2 block font-display text-2xl font-black uppercase leading-none hover:text-[#ccff00] ${done ? "line-through" : ""}`}>{workout.name}</Link>
          <p className="mt-2 text-xs text-white/40">{workout.equipment}</p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-[0.05em] text-white/50">
            <span className="flex items-center gap-1"><Gauge size={13} className="text-[#ccff00]" />{workout.duration}m</span>
            <span className="flex items-center gap-1"><Flame size={13} className="text-[#ccff00]" />{workout.caloriesBurned}</span>
            <span className="flex items-center gap-1"><Star size={13} fill="currentColor" className="text-[#ccff00]" />{workout.rating}</span>
          </div>
          <div className="flex gap-2">
            <Link href={`/workouts/${workout.id}`} className="btn btn-xs rounded-none border-white/15 bg-transparent text-[9px] font-black uppercase tracking-[0.08em] hover:border-[#ccff00]">View Details</Link>
            {!saved && (
              <button disabled={done} onClick={() => markDone(workout.id)} className="btn btn-xs rounded-none border-0 bg-[#ccff00] text-[9px] font-black uppercase text-black hover:bg-[#d8ff3b] disabled:opacity-40">
                <Check size={13} /> Mark as Done
              </button>
            )}
            <button
              onClick={() => saved ? removeFromSaved(workout.id) : removeFromPlan(workout.id)}
              className="btn btn-square btn-xs rounded-none border-white/15 bg-transparent hover:border-red-400 hover:text-red-400"
              aria-label="Remove"
            ><X size={14} /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
