/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#641ae6",

          secondary: "#d926a9",

          accent: "#1fb2a6",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },

        light: {
          primary: "#9cb7ed",

          secondary: "#f26f9f",

          accent: "#c28bdd",

          neutral: "#321d35",

          "base-100": "#e4e8f1",

          info: "#82afd9",

          success: "#22b4a5",

          warning: "#ba5e03",

          error: "#e66b94",
        },
      },
    ],
  },
};
