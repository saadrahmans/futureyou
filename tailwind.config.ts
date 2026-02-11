import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fy: {
          bg: "#f7faf9",
          card: "rgba(255,255,255,0.75)",
          border: "rgba(15, 23, 42, 0.08)",

          primary: "#2bb0a6",     // calm teal
          primarySoft: "#dff5f2",

          accent: "#6366f1",      // indigo
          accentSoft: "#eef2ff",

          text: "#0f172a",
          muted: "rgba(15, 23, 42, 0.6)",
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.06)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
