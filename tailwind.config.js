/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    espresso: "#1a0a00",
    darkRoast: "#2d1200",
    mediumRoast: "#5c2e00",
    gold: "#c8923a",
    cream: "#f5ede0",
    background: "#1a0a00",
    primary: "#f5ede0",
  }
}
  },
  plugins: [],
}