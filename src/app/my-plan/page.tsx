import { MyPlanContent } from "@/components/MyPlanContent";
import { getWorkouts } from "@/lib/api";

export default async function MyPlanPage() {
  const workouts = await getWorkouts();

  return (
    <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-10">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">Your training log</p>
        <h1 className="font-display text-6xl font-black uppercase leading-none tracking-[-0.04em] sm:text-8xl">My Plan</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <MyPlanContent workouts={workouts} />
    </section>
  );
}
