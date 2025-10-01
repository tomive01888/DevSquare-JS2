/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./**/*.{html,js,ts,css}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontSize: {
        dynamic_h1: "clamp(1.5rem, 2vw + 1rem, 1.75rem)",
        dynamic_h2: "clamp(1.25rem, 1.8vw + 0.8rem, 1.5rem)",
        dynamic_h3: "clamp(1.125rem, 1.5vw + 0.6rem, 1.375rem)",
        dynamic_h4: "clamp(1rem, 1.2vw + 0.5rem, 1.25rem)",
        dynamic_h5: "clamp(0.875rem, 1vw + 0.4rem, 1.125rem)",
      },
    },
  },
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
