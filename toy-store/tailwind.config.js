/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff7f0',
          100: '#ffe4cc',
          200: '#ffd1a9',
          300: '#ffbe86',
          400: '#ffab63',
          500: '#ff9840',
          600: '#cc7a33',
          700: '#995b26',
          800: '#663d1a',
          900: '#331e0d',
        },
        accent: {
          pink: '#ff6b6b',
          blue: '#4ecdc4',
          yellow: '#ffe66d',
          purple: '#a8e6cf',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(255, 107, 107, 0.1), 0 2px 4px -1px rgba(255, 107, 107, 0.06)',
        'medium': '0 10px 15px -3px rgba(255, 107, 107, 0.1), 0 4px 6px -2px rgba(255, 107, 107, 0.05)',
        'large': '0 20px 25px -5px rgba(255, 107, 107, 0.1), 0 10px 10px -5px rgba(255, 107, 107, 0.04)',
      },
    },
  },
  plugins: [],
}
