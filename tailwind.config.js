/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',
        'custom-red': '#DC2626',
        'burden': '#1D2933',
      },
    },
  },
  plugins: [],
}
