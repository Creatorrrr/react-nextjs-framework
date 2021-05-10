import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AppContainer from "components/containers/app/AppContainer";
import AgGridSampleContainer from "components/containers/aggrid/AgGridSampleContainer";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";
import DataGridSampleContainer from "components/containers/datagrid/DataGridSampleContainer";
import SnackbarSampleContainer from "components/containers/snackbar/SnackbarSampleContainer";
import TreeSampleContainer from "components/containers/tree/TreeSampleContainer";
import RcTreeSampleContainer from "components/containers/rctree/RcTreeSampleContainer";
import UtilSampleContainer from "components/containers/util/UtilSampleContainer";

export default function MainPage() {
  const router = useRouter();
  const { pagename } = router.query;

  return (
    <Fragment>
      <Head>
        <title>React App</title>
      </Head>
      <AppContainer>
        {pagename === "aggrid" ? (
          <AgGridSampleContainer />
        ) : pagename === "datagrid" ? (
          <DataGridSampleContainer />
        ) : pagename === "snackbar" ? (
          <SnackbarSampleContainer />
        ) : pagename === "dialog" ? (
          <DialogSampleContainer />
        ) : pagename === "tree" ? (
          <TreeSampleContainer />
        ) : pagename === "rctree" ? (
          <RcTreeSampleContainer />
        ) : pagename === "util" ? (
          <UtilSampleContainer />
        ) : (
          <div />
        )}
      </AppContainer>
    </Fragment>
  );
}
