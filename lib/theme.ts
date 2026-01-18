// Design system minimal style iOS
export const theme = {
  // Border radius (plus arrondis pour style iOS premium)
  radii: {
    card: "28px",
    button: "12px",
    input: "10px",
  },
  
  // Shadows (très subtiles style iOS premium)
  shadows: {
    card: "0 1px 12px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)",
    cardHover: "0 2px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)",
    button: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  
  // Spacing
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  
  // Max widths
  maxWidth: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    container: "1200px",
  },
  
  // Colors iOS style
  colors: {
    background: "#F5F5F7",
    card: "#FFFFFF",
    border: "rgba(0, 0, 0, 0.06)", // Bordures très fines
    text: {
      primary: "#1D1D1F",
      secondary: "#86868B",
    },
  },
} as const;