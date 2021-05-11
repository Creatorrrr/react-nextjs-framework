import "react-app-polyfill/ie11";
import Head from "next/head";
import { Fragment } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LanguageDetector from "i18next-browser-languagedetector";
import locales from "locales";
import SnackbarAlert from "components/commons/snackbar/SnackbarAlert";
import NextReduxWrapper from "stores";
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

function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PersistGate persistor={store.persistor} loading={<div>Loading</div>}>
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
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
      </PersistGate>
    </Fragment>
  );
}

export default NextReduxWrapper.withRedux(MyApp);
