# FitLog

FitLog is a responsive workout library and training planner. Browse exercises, review workout details, and build a daily plan that stays saved in your browser.

## Features

- Browse a workout library with exercise imagery, muscle groups, equipment, and key stats.
- Open dedicated workout detail pages with descriptions, specifications, and instructions.
- Add up to five workouts to today's plan, with duplicate and capacity checks.
- Save workouts for later and manage saved items separately from the daily plan.
- Persist planned and saved workouts in `localStorage` across browser reloads.
- Track exercise, duration, and calorie totals for the active list.
- Sort plan and saved workouts by duration, calories, or rating.
- Mark planned workouts as complete, remove items, and receive action feedback.
- Use the library and plan pages on mobile, tablet, and desktop layouts.

## Technologies

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- [Lucide React](https://lucide.dev/) icons
- FitLog workout API: `https://api.abcz.workers.dev/api/fitlog`

## Getting Started

Requires Node.js and npm. From the project directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Production Build

```bash
npm run build
npm run start
```