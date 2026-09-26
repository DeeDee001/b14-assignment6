 "use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export function Navbar() {
  const pathname = usePathname();
  const { plan, saved, hydrated } = useFitLog();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: "Workout", active: pathname === "/" },
    { href: "/my-plan", label: "My Plan", active: pathname === "/my-plan" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center bg-[#ccff00] text-black transition-transform group-hover:rotate-6">
            <Image src="/assets/logo.png" alt="" width={28} height={28} />
          </span>
          <span className="font-display text-xl font-black tracking-[0.12em]">FITLOG</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] transition ${
                item.active ? "bg-white/10 text-[#ccff00]" : "text-white/65 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link href="/my-plan" className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.02]">
            Plan <span className="grid min-w-5 place-items-center rounded-full bg-black/10 px-1.5 py-0.5">{hydrated ? plan.length : 0}</span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white transition hover:border-[#ccff00]">
            Saved <span className="grid min-w-5 place-items-center rounded-full bg-white/10 px-1.5 py-0.5">{hydrated ? saved.length : 0}</span>
          </Link>
        </div>

        <button
          className="btn btn-ghost btn-square md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-5 py-4 md:hidden">
          <nav className="grid gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] ${item.active ? "bg-white/10 text-[#ccff00]" : "text-white/70"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/my-plan" onClick={() => setOpen(false)} className="rounded-full bg-[#ccff00] px-4 py-3 text-center text-xs font-black uppercase text-black">Plan {plan.length}</Link>
            <Link href="/my-plan" onClick={() => setOpen(false)} className="rounded-full border border-white/20 px-4 py-3 text-center text-xs font-black uppercase">Saved {saved.length}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
