import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import RoutingSample from "components/templates/routing/RoutingSample";
import AgGridSampleContainer from "components/containers/aggrid/AgGridSampleContainer";

console.log("pages/routing/aggrid/index.js");

export default function RoutingAgGrid() {
  return (
    <Fragment>
      <Head>
        <title>RoutingAgGridSample</title>
      </Head>
      <AppContainer>
        <RoutingSample>
          <AgGridSampleContainer />
        </RoutingSample>
      </AppContainer>
    </Fragment>
  );
}
