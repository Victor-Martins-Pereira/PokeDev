import { baseTheme } from "./baseTheme";

export const lightTheme = {
  ...baseTheme,

  colors: {
    background: "#d3d8dcff",
    cardBackground: "#E3350D",
    cardInnerBackground: "#6DFF9C",
    textPrimary: "#333333",
    textInverted: "#EAEAEA",
    buttonPrimary: "#FFCB05",
    buttonSecondary: "#2A75BB",
    invertedBackground: "#333333",
    hover: "#d2ae20ff",
  },

  borders: {
    button: "2px solid #333333",
    container: "25px solid #333333",
    card: "3px solid #333333",
    info: "2px solid #333333",
  },
};

export const darkTheme = {
  ...baseTheme,

  colors: {
    background: "#292828ff",
    cardBackground: "#b82a0aff",
    cardInnerBackground: "#7cc393ff",
    textPrimary: "#EAEAEA",
    textInverted: "#333333",
    buttonPrimary: "#d2ae20ff",
    buttonSecondary: "#2A75BB",
    invertedBackground: "#FFFFFF",
    hover: "#FFCB05",
  },

  borders: {
    button: "2px solid #EAEAEA",
    container: "25px solid #bfbfbfff",
    card: "3px solid #EAEAEA",
    info: "2px solid #EAEAEA",
  },
};
