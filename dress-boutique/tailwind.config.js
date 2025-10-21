/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFB6C1',
        'blush': '#FFC0CB',
        'light-gold': '#FFD700',
        'soft-beige': '#F5F5DC',
        'rose': '#FFE4E1',
        'ivory': '#FFFFF0',
        'muted-pink': '#F4C2C2',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
