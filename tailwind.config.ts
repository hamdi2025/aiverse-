import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        "brand-bg":      "#0A0A0F",
        "brand-surface": "#0E0E16",
        "brand-purple":  "#7C3AED",
        "brand-cyan":    "#06B6D4",
        // Glass
        "glass-border":  "rgba(255,255,255,0.08)",
        "glass-fill":    "rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "gradient-brand":   "linear-gradient(to right, #7C3AED, #06B6D4)",
        "gradient-brand-br":"linear-gradient(to bottom right, #7C3AED, #06B6D4)",
        "glass-shine":      "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
      },
      boxShadow: {
        "glow-purple": "0 0 30px 0 rgba(124,58,237,0.25)",
        "glow-cyan":   "0 0 30px 0 rgba(6,182,212,0.20)",
        "card":        "0 4px 24px 0 rgba(0,0,0,0.4)",
      },
      borderRadius: {
        "2xl":  "1rem",
        "3xl":  "1.5rem",
        "hero": "2rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
