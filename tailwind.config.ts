import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        secondary: {
          DEFAULT: "#3C50E0",
          dark: "#2E3A87",
        }
      },
    },
  },
  plugins: [flowbite.plugin(),],
} satisfies Config;
