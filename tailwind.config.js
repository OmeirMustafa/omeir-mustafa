/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensures clean Google Font
      },
      colors: {
        // We are using standard Tailwind colors (blue-600, gray-900) so no custom ones needed
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional: Good for text blocks
  ],
}