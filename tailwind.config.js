/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#757575",
          100: "#F2F2F2"
        },
        red: "#E7462D",
        green: "#8BAC3E"
      }
    },
  },
  plugins: [],
}