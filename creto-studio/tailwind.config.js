/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#011032",
        "royal-navy": "#012468",
        "electric-blue": "#004ACA",
        "bright-azure": "#0185FA",
        "soft-blue": "#79ABCF",
      },
    },
  },
  plugins: [],
};
