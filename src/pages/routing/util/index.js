import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import UtilSampleContainer from "components/containers/util/UtilSampleContainer";

console.log("pages/routing/util/index.js");

export default function RoutingUtil() {
  return (
    <Fragment>
      <Head>
        <title>RoutingUtilSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <UtilSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
