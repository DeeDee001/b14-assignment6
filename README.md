# FitLog

A responsive dark-mode workout library and daily training log built from the FitLog API and designed around the supplied Figma direction.

## Technologies

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- daisyUI
- Lucide React icons
- FitLog REST API
- localStorage for plan/saved persistence

## Key Features

1. Responsive workout library with API-powered cards.
2. Workout detail pages with specs and instructions.
3. Today's Plan with a five-lift cap.
4. Saved workouts tab with persistent localStorage.
5. Live plan metrics for exercises, minutes, and calories.
6. Sort library by duration, calories, or rating.
7. Toast feedback for plan/save/done/remove actions.
8. Custom 404 and loading states.
9. Mobile navigation and responsive layouts.

## API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Git

Use small meaningful commits, for example:

```bash
git add .
git commit -m "build workout library cards"
git commit -m "add workout detail page"
git commit -m "add my plan persistence"
```
