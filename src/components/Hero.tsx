import Link from "next/link";
import { ArrowDownRight, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(204,255,0,0.10),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[#ccff00]">
            <span className="h-px w-8 bg-[#ccff00]" /> Workout Library
          </p>
          <h1 className="font-display max-w-4xl text-[clamp(3.1rem,8vw,7.2rem)] font-black uppercase leading-[0.84] tracking-[-0.04em]">
            Train with intent.<br /><span className="text-white/45">Log every set.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <div className="mt-9">
            <Link href="#library" className="btn border-0 bg-[#ccff00] px-6 font-black uppercase tracking-[0.12em] text-black hover:bg-[#d8ff3b]">
              <Dumbbell size={18} /> Browse workouts <ArrowDownRight size={17} />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[390px] overflow-hidden border-l border-white/10 lg:min-h-[620px]">
          <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/assets/banner.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0b0b0b]/85 lg:via-transparent lg:to-[#0b0b0b]/10" />
          
        </div>
      </div>
    </section>
  );
}
