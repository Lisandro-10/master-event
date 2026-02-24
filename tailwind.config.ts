import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // ── Tablet ──────────────────────────────────────────────────
      md:  "768px",   // iPad Mini / iPad Air portrait  (768×1024)
      lg:  "1024px",  // iPad Pro / laptop 13"          (1024×1366)
      // ── Desktop ─────────────────────────────────────────────────
      xl:  "1280px",  // Desktop estándar               (1280×800+)
      "2xl": "1536px",// Desktop wide / 1080p+           (1536×864+)
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#25F4D1",
          10:      "#25F4D11A",
          5:       "#25F4D10D",
        },
        secondary: {
          DEFAULT: "#1E293B",
          hover:   "#253346",
        },
        dark: {
          DEFAULT: "#10221F",
          deeper:  "#091512",
        },
        light: {
          DEFAULT: "#F1F5F9",
          muted:   "#94A3B8",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
