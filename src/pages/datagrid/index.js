import Head from "next/head";
import { Fragment } from "react";
import AppContainer from "components/containers/app/AppContainer";
import DataGridSampleContainer from "@/components/containers/datagrid/DataGridSampleContainer";

console.log("pages/datagrid/index.js");

export default function MainPage() {
  return (
    <Fragment>
      <Head>
        <title>DataGridSample</title>
      </Head>
      <AppContainer>
        <DataGridSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
