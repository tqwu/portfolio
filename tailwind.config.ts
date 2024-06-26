import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#171721",
        "navy-light": "#192442",
        "neon-pink": "#ff3c68",
        "neon-orange": "#ff7130",
        "neon-purple": "#872b97",
        "pastel-green-light": "#ddf2d1",
        "pastel-green-dark": "#9fd4a3",
        "pastel-brown": "#c2a373",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        custom: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
