import { Fragment } from "react";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Page</title>
      </Head>
      <AppContainer />
    </Fragment>
  );
}
