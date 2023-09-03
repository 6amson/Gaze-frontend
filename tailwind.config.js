/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: "#7FFF52",
        spacePurple: "#A157FF",
        spacePurpleAlt: "#7F53F9",
        spaceViolet: "#801FFF",
      },
      fontFamily: {
        openSans: "var(--font-opensans)",
        raleWay: ["raleway", "sans"],
      },
    },
  },
  plugins: [],
};
