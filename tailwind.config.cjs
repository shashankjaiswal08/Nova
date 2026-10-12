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
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        "dm-mono": ["var(--font-dm-mono)"],
      },
    },
  },
  plugins: [],
};
