// PostCSS pipeline config. Vite runs PostCSS automatically on every .css
// file whenever this file exists -- nothing in vite.config.js needs to
// mention it.
export default {
  plugins: {
    // Turns the @tailwind directives in src/index.css into real CSS,
    // scoped to only the class names Tailwind found via `content` in
    // tailwind.config.js.
    tailwindcss: {},
    // Automatically adds vendor prefixes (e.g. -webkit-) for
    // older/less-common browsers, so we don't have to write them by hand.
    autoprefixer: {},
  },
}
