import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swipe: {
          "0%": {
            transform: " translate(0)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      },
      animation: {
        swipe: "swipe 30s linear infinite backwards",
      },
      colors: {
        current: "currentColor",
        background: "#2B2B2B",
      },
      fontFamily: {
        sans: [],
        serif: [],
        mono: [],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
