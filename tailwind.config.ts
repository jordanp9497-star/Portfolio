import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: theme.colors.background,
        card: theme.colors.card,
        border: theme.colors.border,
        text: {
          primary: theme.colors.text.primary,
          secondary: theme.colors.text.secondary,
        },
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