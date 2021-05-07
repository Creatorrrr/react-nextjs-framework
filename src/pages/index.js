import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import locales from "locales";
import SnackbarAlert from "components/commons/snackbar/SnackbarAlert";
import App from "components/templates/app/App";
import { IS_DEV } from "constants/global-constants";
import "@fontsource/roboto";
import "@fontsource/noto-sans-kr";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
    debug: IS_DEV,
  });

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Sans KR"', "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        content={(key, options) => (
          <SnackbarAlert snackbarKey={key} severity={options.severity} title={options.title}>
            {options.message}
          </SnackbarAlert>
        )}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
