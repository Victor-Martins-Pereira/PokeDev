import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes.js";
import GlobalStyles from "./styles/GlobalStyles.js";

const AppWithTheme = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </StyledThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/PokeDev">
      <ThemeProvider>
        <AppWithTheme />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
