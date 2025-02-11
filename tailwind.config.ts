/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
      colors: {
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",

        primary: "hsl(var(--primary))",
        "primary-light": "hsl(var(--primary-light))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        gray: "hsl(var(--gray))",
        "gray-light": "hsl(var(--gray-light))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "8px",
        md: "4px",
        sm: "2px",
      },
    },
  },
  safelist: [
    "bg-success",
    "text-success",
    "hover:bg-success",
    "bg-danger",
    "text-danger",
    "hover:bg-danger",
  ],
  plugins: [require("tailwindcss-animate")],
};
