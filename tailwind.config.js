/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4ade80',  // optional green highlight
          dark: '#059669'
        }
      }
    }
  },
  plugins: []
};
