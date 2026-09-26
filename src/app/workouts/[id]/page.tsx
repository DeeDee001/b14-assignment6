import Link from "next/link";
import { ArrowLeft, Flame, Gauge, Layers3, Star, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { DetailActions } from "@/components/DetailActions";
import { getWorkout } from "@/lib/api";

export default async function WorkoutDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  if (!workout) notFound();

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/45 hover:text-[#ccff00]"><ArrowLeft size={15} /> Back to library</Link>
      <div className="grid overflow-hidden border border-white/10 bg-[#0f0f0f] lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative min-h-[440px] bg-[#171717] lg:min-h-[760px]">
          <img src={workout.image} alt={workout.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/10" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => <span key={group} className="badge rounded-none border-0 bg-[#ccff00] px-3 py-2 text-[9px] font-black uppercase text-black">{group}</span>)}
            </div>
            <span className="hidden border border-white/20 bg-black/50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.1em] sm:block">{workout.difficulty}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ccff00]">Workout / {String(workout.id).padStart(2, "0")}</p>
          <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl">{workout.name}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">{workout.description}</p>

          <div className="mt-8 grid grid-cols-2 border-y border-white/10 sm:grid-cols-3">
            {[
              ["Equipment", workout.equipment, Layers3],
              ["Difficulty", workout.difficulty, Target],
              ["Sets", String(workout.sets), Layers3],
              ["Reps", workout.reps, Target],
              ["Duration", `${workout.duration} min`, Gauge],
              ["Calories", `${workout.caloriesBurned} kcal`, Flame],
              ["Rating", String(workout.rating), Star],
            ].map(([label, value, Icon]) => {
              const SpecIcon = Icon as typeof Layers3;
              return (
                <div key={String(label)} className="border-b border-white/10 p-4 sm:border-r sm:last:border-r-0">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-white/30"><SpecIcon size={12} className="text-[#ccff00]" />{String(label)}</div>
                  <p className="mt-2 text-xs font-bold uppercase text-white/80">{String(value)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="font-display text-2xl font-black uppercase">Instructions</h2>
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">4 steps</span>
            </div>
            <ol className="grid gap-3">
              {workout.instructions.map((step, index) => (
                <li key={step} className="grid grid-cols-[32px_1fr] gap-3 border-b border-white/5 pb-3 text-sm leading-6 text-white/55">
                  <span className="font-display text-xl font-black text-[#ccff00]">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <DetailActions workout={workout} />
        </div>
      </div>
    </section>
  );
}
