 "use client";

import { Bookmark, Plus } from "lucide-react";
import type { Workout } from "@/lib/types";
import { useFitLog } from "@/context/FitLogContext";

export function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater, plan } = useFitLog();
  const inPlan = plan.some((item) => item.workoutId === workout.id);
  const full = plan.length >= 5 && !inPlan;

  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        onClick={() => addToPlan(workout)}
        disabled={full || inPlan}
        className="btn min-h-12 rounded-none border-0 bg-[#ccff00] font-black uppercase tracking-[0.08em] text-black hover:bg-[#d8ff3b] disabled:bg-white/10 disabled:text-white/30"
      >
        <Plus size={18} /> {inPlan ? "Already in plan" : "Add to today's plan"}
      </button>
      <button
        onClick={() => saveForLater(workout)}
        className="btn min-h-12 rounded-none border border-white/20 bg-transparent font-black uppercase tracking-[0.08em] text-white hover:border-[#ccff00] hover:bg-white/5"
      >
        <Bookmark size={18} /> Save for later
      </button>
    </div>
  );
}
