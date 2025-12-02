/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // THE PEBBLE PALETTE (Warm Greys)
        pebble: {
          100: '#F5F5F4', // Main Background (Stone)
          200: '#E7E5E4', // Borders
          300: '#D6D3D1', // Accents
          800: '#292524', // Secondary Text
          900: '#1C1917', // Primary Text (Charcoal)
        },
        // DAYLIGHT ACCENTS (For the "Glow")
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'soft-pulse': {
          '0%, 100%': {
            'box-shadow': '0 10px 40px -10px rgba(6, 182, 212, 0.2)',
            'border-color': 'rgba(6, 182, 212, 0.3)',
          },
          '50%': {
            'box-shadow': '0 20px 60px -10px rgba(59, 130, 246, 0.3)',
            'border-color': 'rgba(59, 130, 246, 0.5)',
          },
        }
      }
    },
  },
  plugins: [],
}