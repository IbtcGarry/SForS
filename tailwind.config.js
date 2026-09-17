/**
 * Tailwind CSS configuration.
 *
 * This is the single place that defines the site's design tokens (custom
 * colors + fonts) so every component pulls from the same palette instead
 * of hardcoding hex values or font names.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  // Tailwind only generates CSS for class names it finds in these files.
  // If you add a new folder of components, add its glob here too, or
  // Tailwind won't know to scan it and your classes will silently do
  // nothing in the production build.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // `extend` ADDS to Tailwind's built-in defaults rather than replacing
    // them, so all of Tailwind's normal colors/fonts/spacing still work.
    extend: {
      colors: {
        // The "Steve Carty" side of the design: near-black text, off-white
        // background, high contrast, minimal.
        ink: "#111111",
        paper: "#FAFAFA",
        // The "Thrasher Magazine" side: a bold red accent + a true-black
        // for section bands. Nested under `thrasher` so classes read as
        // `bg-thrasher-red`, `text-thrasher-black`, etc.
        thrasher: {
          red: "#E4032E",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        // Body copy: clean, readable sans-serif (Inter).
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Big headlines / the "SFORS" logo mark only: a bold condensed
        // display font (Anton) for the Thrasher-style punch. Both fonts
        // are actually fetched via the @import at the top of
        // src/index.css -- this only tells Tailwind what CSS to write.
        display: ["Anton", "Arial Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
