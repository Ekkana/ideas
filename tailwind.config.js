/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/background.svg')",
      },
      boxShadow: {
        "card-shadow": "0px 2px 12px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        "card-green": "#85E0A3",
        "card-pink": "#FFAFA3",
        "card-violet": "#D9B8FF",
        "card-blue": "#80CAFF",
      },
    },
  },
  plugins: [],
};
