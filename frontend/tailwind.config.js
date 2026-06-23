/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        madinah: {
          green: '#2E8B57', // Sea Green / Prophet's Dome Green
          gold: '#D4AF37',  // Gold
          white: '#F8F9FA', // Off-white/marble
          dark: '#1A1A1A',  // Dark Gray
        }
      },
      fontFamily: {
        sans: ['"Saudi"', 'sans-serif'],
        arabic: ['"Saudi"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
