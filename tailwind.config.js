/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E91E63", // Vibrant pink
          foreground: "#ffffff",
          light: "#FF80AB", // Light pink
          dark: "#C2185B", // Dark pink
        },
        secondary: {
          DEFAULT: "#4A777A", // Teal from the image
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#FFD700", // Gold
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#6C757D",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(233, 30, 99, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

