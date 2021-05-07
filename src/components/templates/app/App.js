import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppHeaderContainer from "components/containers/app/AppHeaderContainer";
import AppSidebarContainer from "components/containers/app/AppSidebarContainer";
import Main from "components/commons/layout/Main";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

console.debug("App.js");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
  
export default function App({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeaderContainer />
      <AppSidebarContainer />
      <Main>{children}</Main>
    </div>
  );
}
