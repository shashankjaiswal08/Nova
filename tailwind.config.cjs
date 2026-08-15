/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        panel: "#111111",
        violet: "#8d76ff",
        blue: "#92b7ff",
      },
      keyframes: {
        ambientShift: {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)", opacity: "0.9" },
          "100%": {
            transform: "scale(1.08) translate3d(-12px, 12px, 0)",
            opacity: "1",
          },
        },
        floatPanel: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        ambientShift: "ambientShift 18s ease-in-out infinite alternate",
        floatPanel: "floatPanel 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
