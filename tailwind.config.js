/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#1EA5AD',
        },
        gray: {
          700: '#1E1E1E'
        }
      },
    },
  },
  plugins: [],
}

