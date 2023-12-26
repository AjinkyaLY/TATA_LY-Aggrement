/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#ef6351",
          black: "#232323",
          yellow: "#FAE100",
          blue: "#5380cc",
        },
        "natural-black": "#212121",
        secondary: { green: "#4C956C", blue: "#A9DAFF", red: "#EF6351" },
        "dark-grey": "#565656",
        "light-grey": "#B3B3B3",
        "light-green": "#D9F2CB",
        "neutral-white": "#FFFFFF",
        "light-red": "#F1999C",
        "grey-white": "#F3F3F3",
        "medium-grey": "#FAFAFA",
        "disabled-grey": "#EFEFEF",
        "lighter-grey": "#D9D9D9",
        stroke: "#D9D9D9",
      },
    },
    boxShadow: {
      primary: "0px 0px 3px 0px",
      secondary: "0px 2px 10px rgba(0, 0, 0, 0.06)",
      modal: "0px 8px 11px -4px #0000000D",
      calendar: "0px 4px 14px 0px #0000001A",
      search: "0px 0px 3px 0px rgba(190, 190, 190, 0.79)",
    },
  },
  plugins: [],
};
