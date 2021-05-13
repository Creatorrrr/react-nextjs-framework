import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import UtilSampleContainer from "components/containers/util/UtilSampleContainer";

console.log("pages/util.js");

export default function Util() {
  return (
    <Fragment>
      <Head>
        <title>UtilSample</title>
      </Head>
      <AppContainer>
        <UtilSampleContainer />
      </AppContainer>
    </Fragment>
  );
}
