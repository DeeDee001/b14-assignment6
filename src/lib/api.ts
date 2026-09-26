import type { Workout } from "./types";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 * 10 },
  });

  if (!response.ok) {
    throw new Error("Failed to load workout library.");
  }

  return response.json();
}

export async function getWorkout(id: string | number): Promise<Workout | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: 60 * 10 },
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Failed to load workout.");

  return response.json();
}
