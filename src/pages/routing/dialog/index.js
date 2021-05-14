import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";

console.log("pages/routing/dialog/index.js");

export default function RoutingDialog() {
  return (
    <Fragment>
      <Head>
        <title>RoutingDialogSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <DialogSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
