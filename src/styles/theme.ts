export const theme = {
  colors: {
    background: "#f8f8f8",
    text: "#484244",
    primary: "#1a0747",
    secondary: "#ff9800",
    danger: "#f44336",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: {
    base: "'Inter', Arial, sans-serif",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
  spacing: (factor: number) => `${8 * factor}px`,
};
