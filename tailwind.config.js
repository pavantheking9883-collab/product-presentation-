/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(99, 102, 241)",
          hover: "rgb(79, 70, 229)",
        },
        accent: "rgb(249, 115, 22)",
        purple: "rgb(168, 85, 247)",
        emerald: "rgb(16, 185, 129)",
        red: "rgb(239, 68, 68)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
