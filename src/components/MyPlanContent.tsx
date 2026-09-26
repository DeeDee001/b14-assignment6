 "use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import type { SortKey, Workout } from "@/lib/types";
import { useFitLog } from "@/context/FitLogContext";
import { MetricsSummary } from "./MetricsSummary";
import { PlanCard } from "./PlanCard";

function compareWorkouts(first: Workout, second: Workout, sort: SortKey) {
  if (sort === "calories") return second.caloriesBurned - first.caloriesBurned;
  if (sort === "rating") return second.rating - first.rating;
  return first.duration - second.duration;
}

export function MyPlanContent({ workouts }: { workouts: Workout[] }) {
  const { plan, saved, hydrated } = useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [sort, setSort] = useState<SortKey>("duration");

  const workoutMap = useMemo(() => new Map(workouts.map((item) => [item.id, item])), [workouts]);

  const planWorkouts = plan.flatMap((item) => {
    const workout = workoutMap.get(item.workoutId);
    return workout ? [{ workout, done: item.done }] : [];
  });
  const savedWorkouts = saved.map((id) => workoutMap.get(id)).filter(Boolean) as Workout[];
  const sortedPlanWorkouts = [...planWorkouts].sort((first, second) => {
    return compareWorkouts(first.workout, second.workout, sort);
  });
  const sortedSavedWorkouts = [...savedWorkouts].sort((first, second) => compareWorkouts(first, second, sort));
  const activeWorkouts = tab === "plan" ? planWorkouts.map(({ workout }) => workout) : savedWorkouts;

  const metrics = {
    exercises: activeWorkouts.length,
    minutes: activeWorkouts.reduce((sum, workout) => sum + workout.duration, 0),
    calories: activeWorkouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0),
  };

  useEffect(() => {
    if (!hydrated) return;
  }, [hydrated]);

  if (!hydrated) {
    return <div className="py-20 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/40">Loading workouts…</div>;
  }

  const listIsEmpty = tab === "plan" ? planWorkouts.length === 0 : savedWorkouts.length === 0;

  return (
    <>
      <MetricsSummary {...metrics} />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
        <div className="flex items-center gap-1">
          <button onClick={() => setTab("plan")} className={`border-b-2 px-4 py-4 text-xs font-black uppercase tracking-[0.12em] transition ${tab === "plan" ? "border-[#ccff00] text-[#ccff00]" : "border-transparent text-white/40 hover:text-white"}`}>Today&apos;s Plan <span className="ml-2 text-white/30">{plan.length}</span></button>
          <button onClick={() => setTab("saved")} className={`border-b-2 px-4 py-4 text-xs font-black uppercase tracking-[0.12em] transition ${tab === "saved" ? "border-[#ccff00] text-[#ccff00]" : "border-transparent text-white/40 hover:text-white"}`}>Saved <span className="ml-2 text-white/30">{saved.length}</span></button>
        </div>
        <label className="relative mb-2 w-full sm:w-52">
          <span className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/40"><SlidersHorizontal size={13} /> Sort by</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="select w-full rounded-none border-white/15 bg-[#111] font-bold uppercase tracking-[0.08em] text-white"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
          <ChevronDown className="pointer-events-none absolute bottom-3 right-3" size={15} />
        </label>
      </div>

      {listIsEmpty ? (
        <div className="mt-4 border border-dashed border-white/15 px-6 py-20 text-center">
          <p className="font-display text-4xl font-black uppercase">Nothing here yet</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">Browse the library and add a lift to get today moving.</p>
          <Link href="/" className="btn mt-6 rounded-none border-0 bg-[#ccff00] font-black uppercase tracking-[0.08em] text-black hover:bg-[#d8ff3b]">Go to workouts <ArrowRight size={16} /></Link>
        </div>
      ) : (
        <div className="mt-4 grid gap-3">
          {tab === "plan"
            ? sortedPlanWorkouts.map(({ workout, done }) => workout && <PlanCard key={workout.id} workout={workout} done={done} />)
            : sortedSavedWorkouts.map((workout) => <PlanCard key={workout.id} workout={workout} saved />)}
        </div>
      )}
    </>
  );
}
