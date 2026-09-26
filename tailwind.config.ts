import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        fitlime: "#ccff00",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        fitlog: {
          primary: "#ccff00",
          secondary: "#1a1a1a",
          accent: "#ccff00",
          neutral: "#171717",
          "base-100": "#0b0b0b",
          "base-200": "#111111",
          "base-300": "#1a1a1a",
          "base-content": "#f5f5f5",
          info: "#8ab4f8",
          success: "#ccff00",
          warning: "#f7c948",
          error: "#ff5c5c",
        },
      },
    ],
  },
};

export default config;
