import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import SnackbarSampleContainer from "components/containers/snackbar/SnackbarSampleContainer";

console.log("pages/snackbar/index.js");

export default function Snackbar() {
  return (
    <Fragment>
      <Head>
        <title>SnackbarSample</title>
      </Head>
      <AppContainer>
        <SnackbarSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
