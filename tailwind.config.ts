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
        "desktop-lg": "1800px", // Katta ekranlar (1800px+)
        "desktop": { max: "1799px" }, // 1440px - 1799px
        "tablet": { max: "1439px" }, // 810px - 1439px
        "mobile": { max: "809px" },  // 809px dan kichik ekranlar
      },
    },
  },
  plugins: [],
};

export default config;
