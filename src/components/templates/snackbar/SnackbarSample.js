import { Button, makeStyles } from "@material-ui/core";

console.debug("SnackbarSample.js");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function SnackbarSample({ onSuccessClicked, onInfoClicked, onWarningClicked, onErrorClicked }) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div>
        <Button variant="outlined" color="primary" onClick={onSuccessClicked}>
          Success 스낵바
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={onInfoClicked}>
          Info 스낵바
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={onWarningClicked}>
          Warning 스낵바
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={onErrorClicked}>
          Error 스낵바
        </Button>
      </div>
    </div>
  );
}
