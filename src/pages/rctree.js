import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RcTreeSampleContainer from "components/containers/rctree/RcTreeSampleContainer";

console.log("pages/rctree.js");

export default function RcTree() {
  return (
    <Fragment>
      <Head>
        <title>RcTreeSample</title>
      </Head>
      <AppContainer>
        <RcTreeSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
