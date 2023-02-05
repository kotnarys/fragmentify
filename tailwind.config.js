/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "start-blue": "#4C49D9",
        "start-cyan": "#3D3BAC",
        "color-text": "#F8F8F8",
        violets: "#8C3F9F",
        reds: "#AD3838",
        grens: "#4D9F3F",
        grays: "#393939",
      },
      fontFamily: {
        lalezar: ["Lalezar"],
        Kumbh: ["Kumbh Sans"],
      },
      height: {
        50: "50rem",
      },
      top: {
        155: "155px",
      },
    },
  },
  plugins: [],
};
