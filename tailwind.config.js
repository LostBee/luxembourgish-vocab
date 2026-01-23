/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'midnight': {
          900: '#0a0e17',
          800: '#0f1520',
          700: '#161d2d',
          600: '#1e2840',
        },
        'amber': {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        'teal': {
          400: '#2dd4bf',
          500: '#14b8a6',
        }
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        }
      }
    },
  },
  plugins: [],
}


