import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./auth/**/*.html", "./profile/**/*.html", "./post/**/*.html", "./src/**/*.{js,mjs}"],
  theme: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".columns-1": {
          columnCount: "1",
        },
        ".columns-2": {
          columnCount: "2",
        },
        ".columns-3": {
          columnCount: "3",
        },
      });
    }),
  ],
};
