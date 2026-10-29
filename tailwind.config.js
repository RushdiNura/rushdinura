/** @type {import('tailwindcss').Config} */
// Tailwind is kept in the toolchain for its base layer; the site's styling lives in src/index.css.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
};
