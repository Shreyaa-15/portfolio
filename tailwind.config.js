/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        primary: "#EDEDED",
        secondary: "#A1A1AA",
        accent: "#C4A484",   // coffee tone
        card: "#1A1A1A"
      }
    },
  },
  plugins: [],
}