import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";

console.log("pages/dialog/index.js");

export default function Dialog() {
  return (
    <Fragment>
      <Head>
        <title>DialogSample</title>
      </Head>
      <AppContainer>
        <DialogSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
