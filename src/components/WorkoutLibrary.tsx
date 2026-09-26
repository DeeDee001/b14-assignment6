import type { Workout } from "@/lib/types";
import { WorkoutCard } from "./WorkoutCard";

export function WorkoutLibrary({ workouts }: { workouts: Workout[] }) {
  return (
    <section id="library" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">12 movements</p>
          <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">The Library</h2>
          <p className="mt-3 text-sm text-white/45 sm:text-base">Twelve lifts covering every major muscle group.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
      </div>
    </section>
  );
}
