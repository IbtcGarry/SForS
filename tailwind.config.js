/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FAFAFA",
        thrasher: {
          red: "#E4032E",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Anton", "Arial Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
