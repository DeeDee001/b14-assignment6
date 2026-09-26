 "use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PlanItem, Workout } from "@/lib/types";
import { storage } from "@/lib/storage";

type ToastState = { id: number; message: string; type: "success" | "warning" };

type FitLogContextValue = {
  plan: PlanItem[];
  saved: number[];
  hydrated: boolean;
  toast: ToastState | null;
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  markDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  dismissToast: () => void;
};

const FitLogContext = createContext<FitLogContextValue | null>(null);

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    setPlan(storage.getPlan());
    setSaved(storage.getSaved());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) storage.setPlan(plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) storage.setSaved(saved);
  }, [saved, hydrated]);

  const notify = useCallback((message: string, type: ToastState["type"] = "success") => {
    const id = Date.now();
    setToast({ id, message, type });
    window.setTimeout(() => setToast((current) => (current?.id === id ? null : current)), 2600);
  }, []);

  const addToPlan = useCallback(
    (workout: Workout) => {
      if (plan.some((item) => item.workoutId === workout.id)) {
        notify("Already in today's plan", "warning");
        return;
      }
      if (plan.length >= 5) {
        notify("Today's plan is full — 5 lifts max", "warning");
        return;
      }
      setPlan((current) => [...current, { workoutId: workout.id, done: false, addedAt: Date.now() }]);
      notify("Added to today's plan");
    },
    [plan, notify],
  );

  const saveForLater = useCallback(
    (workout: Workout) => {
      if (saved.includes(workout.id)) {
        notify("Already saved", "warning");
        return;
      }
      setSaved((current) => [...current, workout.id]);
      notify("Saved for later");
    },
    [saved, notify],
  );

  const markDone = useCallback(
    (id: number) => {
      setPlan((current) => current.map((item) => (item.workoutId === id ? { ...item, done: true } : item)));
      notify("Workout marked as done");
    },
    [notify],
  );

  const removeFromPlan = useCallback(
    (id: number) => {
      setPlan((current) => current.filter((item) => item.workoutId !== id));
      notify("Removed from today's plan");
    },
    [notify],
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      setSaved((current) => current.filter((item) => item !== id));
      notify("Removed from saved");
    },
    [notify],
  );

  const value = useMemo(
    () => ({
      plan,
      saved,
      hydrated,
      toast,
      addToPlan,
      saveForLater,
      markDone,
      removeFromPlan,
      removeFromSaved,
      dismissToast: () => setToast(null),
    }),
    [plan, saved, hydrated, toast, addToPlan, saveForLater, markDone, removeFromPlan, removeFromSaved],
  );

  return (
    <FitLogContext.Provider value={value}>
      {children}
      {toast && (
        <div className="toast toast-end toast-top z-[100] p-4">
          <div className={`alert ${toast.type === "warning" ? "alert-warning" : "alert-success"} shadow-2xl`}>
            <span>{toast.message}</span>
            <button className="btn btn-ghost btn-xs" onClick={() => setToast(null)} aria-label="Dismiss">
              ×
            </button>
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error("useFitLog must be used inside FitLogProvider");
  return context;
}
