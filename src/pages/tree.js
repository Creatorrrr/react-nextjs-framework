import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import TreeSampleContainer from "components/containers/tree/TreeSampleContainer";

console.log("pages/tree.js");

export default function Tree() {
  return (
    <Fragment>
      <Head>
        <title>TreeSample</title>
      </Head>
      <AppContainer>
        <TreeSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
