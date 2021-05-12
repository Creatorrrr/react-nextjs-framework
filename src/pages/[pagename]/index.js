import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import cookie from "cookie";
import AppContainer from "components/containers/app/AppContainer";
import AgGridSampleContainer from "components/containers/aggrid/AgGridSampleContainer";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";
import DataGridSampleContainer from "components/containers/datagrid/DataGridSampleContainer";
import SnackbarSampleContainer from "components/containers/snackbar/SnackbarSampleContainer";
import TreeSampleContainer from "components/containers/tree/TreeSampleContainer";
import RcTreeSampleContainer from "components/containers/rctree/RcTreeSampleContainer";
import UtilSampleContainer from "components/containers/util/UtilSampleContainer";
import NodeApi from "apis/node-api";

console.log("[pagename]/index.js");

export async function getServerSideProps({ req }) {
  const parsedCookie = cookie.parse(req.headers.cookie);
  const token = parsedCookie.token;

  const response = await NodeApi.getNodeChildren(
    {
      nodeId: 12132,
      nodeTypeCodes: ["FOLDER", "DOCUMENT", "TRASH", "DIRECTORY"],
      orders: [
        { field: "useYn", direction: "asc" },
        { field: "sortKey", direction: "asc" },
        { field: "dkName", direction: "asc" },
        { field: "regDate", direction: "asc" },
      ],
      mode: "detail",
    },
    {
      Authorization: token,
    },
  );

  return {
    props: {
      response: response.data.result,
    },
  };
}

export default function MainPage({ response }) {
  console.log(response);
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
