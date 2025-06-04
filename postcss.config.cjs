// postcss.config.cjs
module.exports = {
  plugins: [
    // use the new Tailwind v4 PostCSS plugin:
    require('@tailwindcss/postcss'),
    // autoprefixer stays the same:
    require('autoprefixer'),
  ],
}
