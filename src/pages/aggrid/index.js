import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import cookie from "cookie";
import AppContainer from "components/containers/app/AppContainer";
import AgGridSampleContainer from "components/containers/aggrid/AgGridSampleContainer";
import NodeApi from "apis/node-api";
import LoginApi from "apis/login-api";
import CommonUtil from "utils/common-util";
import CenterCircularProgress from "components/commons/progress/CenterCircularProgress";

console.log("pages/aggrid/index.js");

export async function getServerSideProps({ req }) {
  const parsedCookie = cookie.parse(req.headers.cookie || "");
  const token = parsedCookie.token;

  const headers = {};
  if (token) headers.Authorization = token;

  let unauthorized = false;

  let user;
  try {
    const response = await LoginApi.session({ params: { mode: "detail" }, headers });
    user = response.data.result;
  } catch (e) {
    unauthorized = true;
  }

  let nodeList = [];
  try {
    const response = await NodeApi.getNodeChildren({
      params: {
        nodeId: user?.group?.nodeId,
        nodeTypeCodes: ["FOLDER", "DOCUMENT", "TRASH", "DIRECTORY"],
        orders: [
          { field: "useYn", direction: "asc" },
          { field: "sortKey", direction: "asc" },
          { field: "dkName", direction: "asc" },
          { field: "regDate", direction: "asc" },
        ],
        mode: "detail",
      },
      headers,
    });
    nodeList = response.data.result.list;
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      unauthorized,
      nodeList,
    },
  };
}

export default function MainPage({ unauthorized, nodeList }) {
  const router = useRouter();

  useEffect(() => {
    if (unauthorized) {
      CommonUtil.removeCookie("token");
      router.replace("/login");
    }
  });

  return !unauthorized ? (
    <Fragment>
      <Head>
        <title>AgGridSample</title>
      </Head>
      <AppContainer>
        <AgGridSampleContainer nodeList={nodeList} />
      </AppContainer>
    </Fragment>
  ) : (
    <CenterCircularProgress />
  );
}
