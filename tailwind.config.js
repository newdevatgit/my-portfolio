/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'Great Vibes', 'cursive'],
        'elegant': ['Tangerine', 'Pinyon Script', 'cursive'],
        'handwriting': ['Caveat', 'Kalam', 'cursive'],
        'title': ['Playfair Display', 'Cinzel', 'serif'],
        'fancy': ['Pacifico', 'Lobster', 'cursive'],
        'modern': ['Abril Fatface', 'Righteous', 'display'],
        // New font families for paragraphs
        'body': ['Open Sans', 'Roboto', 'sans-serif'],
        'reading': ['Lora', 'Merriweather', 'serif'],
        'content': ['Source Sans Pro', 'Nunito', 'sans-serif'],
        'clean': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}