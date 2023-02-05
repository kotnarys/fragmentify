/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "start-blue": "#4C49D9",
        "start-cyan": "#3D3BAC",
        "start-text": "#F8F8F8",
        "start-paragraph": "#908B8B",
      },
      backgroundImage: {
        home: "url(../../public/HomePage.jpg)",
        "color-text": "#F8F8F8",
        violets: "#8C3F9F",
        reds: "#AD3838",
        grens: "#4D9F3F",
        grays: "#393939",
        whites: "#ECECEC",
      },
      fontFamily: {
        lalezar: ["Lalezar"],
        Kumbh: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
