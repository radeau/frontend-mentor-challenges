import { url } from "inspector";
import type { Config } from "tailwindcss";
// import imagesss from "./images/pattern-background-desktop.svg"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-pattern-desktop": "url('./images/pattern-background-desktop.svg')"
      },
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)"
      },
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif',],
      }
    },
  },
  plugins: [],
};
export default config;
