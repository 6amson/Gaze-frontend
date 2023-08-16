/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxl: "1400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: { neonGreen: "#7FFF52", spacePurple: "#A157FF" },
      fontFamily: {
        openSans: "var(--font-opensans)",
        raleWay: ["raleway", "sans"],
      },
    },
  },
  plugins: [],
};
