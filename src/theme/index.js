import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import customizeComponents from "./customizations";

export const PRIMARY = {
  light: "#ee6a6a",
  main: "#EE1B24",
  dark: "#c10007",
  contrastText: "#FFF",
};
export const SECONDARY = {
  light: "#E5EEFB",
  main: "#0F5EDD",
  dark: "#1b3cbe",
  contrastText: "#FFF",
};
export const UCARS = {
  light: "#CEF7E2",
  main: "#0FC97B",
  dark: "#1F7B4D",
  contrastText: "#FFF",
};
export const GREY = {
  0: "#FFFFFF",
  100: "#FAFAFA",
  200: "#F1F1F1",
  300: "#E3E3E3",
  400: "#B4B4B4",
  500: "#8C8C8C",
  600: "#5F5F5F",
  700: "#323435",
  800: "#232323",
};

export const BREAKPOINTS = {
  xs: 0,
  sm: 375,
  md: 900,
  lg: 1200,
  xl: 1366,
};

export const BACKGROUND = {
  paper: "#FFFFFF",
  default: "#E0E0E0",
  defaultChannel: "255 255 255",
};

export const FONT = ["Roboto", "Helvetica", "Arial", "sans-serif", "Poppins"];

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      ucars: UCARS,
      grey: GREY,
    },
    typography: { fontFamily: FONT.join(",") },
    breakpoints: { values: BREAKPOINTS },
    background: BACKGROUND,
    shape: { borderRadius: 5 },
    zIndex: {
      tooltip: 999999,
    },
  };

  const theme = createTheme(themeOptions);
  theme.components = customizeComponents(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
