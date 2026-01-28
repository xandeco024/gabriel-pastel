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
        background: "#fff8e8",
        foreground: "#2c221c",
        pastel: "#f1ecc8",
        vegGreen: {
          dark: "#099b84",
          DEFAULT: "#10806e",
          light: "#15a392",
        },
        vegYellow: {
          dark: "#d88f0f",
          DEFAULT: "#f6a011",
          light: "#ffb733",
        },
        vegOrange: {
          dark: "#e64d00",
          DEFAULT: "#ff5500",
          light: "#ff7733",
        },
        vegRed: {
          dark: "#8b3232",
          DEFAULT: "#ab3f3f",
          light: "#c55c5c",
        },
        vegBrown: {
          dark: "#2c221c",
          DEFAULT: "#4a3c32",
          light: "#6b5a4d",
        },
      },
      fontFamily: {
        gluten: ["var(--font-gluten)"],
        holtwood: ["var(--font-holtwood)"],
        adumu: ["var(--font-adumu)"],
      },
      keyframes: {
        "dropdown-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "zoom-in-95": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(var(--tw-rotate))",
          },
          "50%": {
            transform: "translateY(-20px) rotate(var(--tw-rotate))",
          },
        },
        "float-slower": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(var(--tw-rotate))",
          },
          "50%": {
            transform: "translateY(-15px) rotate(var(--tw-rotate))",
          },
        },
        "splash-morph": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            filter: "blur(0px)",
          },
          "25%": {
            transform: "scale(1.05) rotate(2deg)",
            filter: "blur(1px)",
          },
          "50%": {
            transform: "scale(0.98) rotate(-1deg)",
            filter: "blur(0.5px)",
          },
          "75%": {
            transform: "scale(1.03) rotate(1deg)",
            filter: "blur(1.5px)",
          },
        },
      },
      animation: {
        "dropdown-in": "dropdown-in 0.2s ease-out forwards",
        "zoom-in-95": "zoom-in-95 0.2s ease-out forwards",
        "fade-in": "fade-in 0.2s ease-out forwards",
        in: "fade-in 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slower": "float-slower 8s ease-in-out infinite",
        "splash-morph": "splash-morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
