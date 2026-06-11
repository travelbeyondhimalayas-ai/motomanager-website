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
          DEFAULT: "#1ca9c9",
          dark: "#0f2540",
          50: "#eefaf9",
          100: "#d6f1f1",
          200: "#aee3e5",
          300: "#79cdd4",
          400: "#3fb3c4",
          500: "#1ca9c9",
          600: "#1681a3",
          700: "#155f80",
          800: "#173f5a",
          900: "#0f2540",
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
