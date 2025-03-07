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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#101010",
        secondary: "#191919",
        textPrimary: "#ccc",
        textColor: "#7F7F7F",
        textSecondary: "#A291FD",
      },
      screens: {
        "mobile": { max: "809px" },               // 809px dan kichik ekranlar
        "tablet": { min: "810px", max: "1439px" }, // 810px - 1439px oralig‘i
        "desktop": { min: "1440px" }              // 1440px dan katta ekranlar
      },
      animation: {
        'carousel-right': 'scrollRight 15s linear infinite',
        'carousel-left': 'scrollLeft 15s linear infinite',
        "carousel-right-project": "scrollRight 50s linear infinite",
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
    },
    },
  },
  plugins: [],
};

export default config;
