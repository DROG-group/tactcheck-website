import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: '"DM Serif Text", serif',
      },
      colors: {
        tolopea: {
          DEFAULT: "#19003D",
          50: "#6400F5",
          100: "#5C00E0",
          200: "#4B00B7",
          300: "#3A008F",
          400: "#2A0066",
          500: "#19003D",
          600: "#020005",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["lofi", "black"],
  },
}
export default config
