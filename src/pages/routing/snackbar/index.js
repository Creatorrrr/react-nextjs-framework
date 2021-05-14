import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import SnackbarSampleContainer from "components/containers/snackbar/SnackbarSampleContainer";

console.log("pages/routing/snackbar/index.js");

export default function RoutingSnackbar() {
  return (
    <Fragment>
      <Head>
        <title>RoutingSnackbarSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <SnackbarSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
