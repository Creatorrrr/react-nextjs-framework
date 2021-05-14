import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import TreeSampleContainer from "components/containers/tree/TreeSampleContainer";

console.log("pages/routing/tree/index.js");

export default function RoutingTree() {
  return (
    <Fragment>
      <Head>
        <title>RoutingTreeSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <TreeSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
