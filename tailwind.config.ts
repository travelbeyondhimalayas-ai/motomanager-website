import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#c96442",
          dark: "#a8502f",
          50: "#fdf4f1",
          100: "#fbe6df",
          200: "#f5cabc",
          300: "#eda58e",
          400: "#e0775a",
          500: "#c96442",
          600: "#a8502f",
          700: "#8a4127",
          800: "#6e3520",
          900: "#5a2d1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
