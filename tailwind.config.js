/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: { 900: '#020617', 800: '#0F172A' },
        quantum: { cyan: '#22d3ee', blue: '#3b82f6', purple: '#a855f7', pink: '#ec4899' }
      },
      animation: {
        'neon-glow-border': 'neon-glow-border 4s ease-in-out infinite alternate',
      },
      keyframes: {
        'neon-glow-border': {
            '0%, 100%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.4), 0 0 15px rgba(6, 182, 212, 0.4)', borderColor: 'rgba(6, 182, 212, 0.4)' },
            '50%': { boxShadow: '0 0 8px rgba(6, 182, 212, 0.6), 0 0 25px rgba(6, 182, 212, 0.6)', borderColor: 'rgba(6, 182, 212, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}