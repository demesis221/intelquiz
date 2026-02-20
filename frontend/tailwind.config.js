/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2d3748',
        slate: '#4a5568',
        'warm-gray': '#718096',
        'off-white': '#f7fafc',
      },
    },
  },
  plugins: [],
}
