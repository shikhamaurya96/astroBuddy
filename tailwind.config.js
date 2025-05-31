const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        growSpin:{
          "0%":{transform: "rotate(0deg)   scale(0.1)"},
          "100%": { transform: "rotate(360deg) scale(1)"}
        }
      },
      animation: {
        // name  duration  timing   fill-mode
        growSpin: "growSpin 2s ease-in-out forwards"
      }
    },
  },
  plugins: [],
})

