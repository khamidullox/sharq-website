/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair-display)", "serif"],
        argueDemo: ["var(--font-argue-demo", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")], // Подключаем DaisyUI, если нужно
};
