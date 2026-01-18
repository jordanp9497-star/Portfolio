import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        card: "var(--card)",
        border: "var(--border)",
        text: {
          primary: "var(--text)",
          secondary: "var(--muted)",
        },
        "ai-pink": "var(--ai-pink)",
        "ai-violet": "var(--ai-violet)",
        "ai-blue": "var(--ai-blue)",
      },
      borderRadius: {
        card: theme.radii.card,
        button: theme.radii.button,
        input: theme.radii.input,
      },
      boxShadow: {
        card: theme.shadows.card,
        "card-hover": theme.shadows.cardHover,
        button: theme.shadows.button,
      },
      maxWidth: {
        ...theme.maxWidth,
      },
      spacing: {
        ...theme.spacing,
      },
    },
  },
  plugins: [],
};
export default config;