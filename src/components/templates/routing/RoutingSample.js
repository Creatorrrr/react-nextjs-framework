import { CssBaseline, makeStyles } from "@material-ui/core";
import Main from "components/commons/layout/Main";
import AppHeaderContainer from "components/containers/app/AppHeaderContainer";
import RoutingSidebarContainer from "components/containers/routing/RoutingSidebarContainer";

console.debug("RoutingSample.js");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function RoutingSample({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.content}>
        <RoutingSidebarContainer className={classes.sidebar} />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
