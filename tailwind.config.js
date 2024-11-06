/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4F7FF",
        backgroundColor: "#EFFFFA",
        green: {
          500: "#11BB60",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
