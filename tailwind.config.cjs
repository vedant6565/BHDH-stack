/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myprimary: {
          50: "#e6f2f9",
          100: "#cde5f3",
          200: "#9bcae7",
          300: "#6ab0da",
          400: "#3895ce",
          500: "#067bc2",
          600: "#05629b",
          700: "#044a74",
          800: "#02314e",
          900: "#011927",
        },
        primary: "#067bc2",
        secondary: "#f37748",
        green2: "#059862",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
