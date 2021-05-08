import AppContainer from "components/containers/app/AppContainer";
// import AgGridSampleContainer from "components/containers/aggrid/AgGridSampleContainer";
// import DataGridSampleContainer from "components/containers/datagrid/DataGridSampleContainer";
// import LoginFormContainer from "components/containers/login/LoginFormContainer";
// import SnackbarSampleContainer from "components/containers/snackbar/SnackbarSampleContainer";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";
// import TreeSampleContainer from "components/containers/tree/TreeSampleContainer";
// import RcTreeSampleContainer from "components/containers/rctree/RcTreeSampleContainer";
// import UtilSampleContainer from "components/containers/util/UtilSampleContainer";

console.debug("router-config.js");

const routes = [
  // {
  //   path: "/login",
  //   component: LoginFormContainer,
  // },
  {
    path: "/",
    component: AppContainer,
    routes: [
      // {
      //   path: "/aggrid",
      //   component: AgGridSampleContainer,
      // },
      // {
      //   path: "/datagrid",
      //   component: DataGridSampleContainer,
      // },
      // {
      //   path: "/snackbar",
      //   component: SnackbarSampleContainer,
      // },
      {
        path: "/dialog",
        component: DialogSampleContainer,
      },
      // {
      //   path: "/tree",
      //   component: TreeSampleContainer,
      // },
      // {
      //   path: "/rctree",
      //   component: RcTreeSampleContainer,
      // },
      // {
      //   path: "/util",
      //   component: UtilSampleContainer,
      // },
    ],
  },
];

export default routes;
