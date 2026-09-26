import type { PlanItem } from "./types";

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export const storage = {
  getPlan: () => read<PlanItem[]>(PLAN_KEY, []),
  setPlan: (value: PlanItem[]) => write(PLAN_KEY, value),
  getSaved: () => read<number[]>(SAVED_KEY, []),
  setSaved: (value: number[]) => write(SAVED_KEY, value),
};
