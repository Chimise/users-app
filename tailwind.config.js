/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4285F4",
        accent: "#6D6D6D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
