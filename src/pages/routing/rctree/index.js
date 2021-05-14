import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import RcTreeSampleContainer from "components/containers/rctree/RcTreeSampleContainer";

console.log("pages/routing/rctree/index.js");

export default function RoutingRcTree() {
  return (
    <Fragment>
      <Head>
        <title>RoutingRcTreeSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <RcTreeSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
