/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#b59a59',
        'brand-dark': '#212529',
        'brand-light': '#f8f9fa',
        'brand-white': '#ffffff',
      }
    },
  },
  plugins: [],
}

