import { Button, makeStyles, Typography } from "@material-ui/core";
import ConfirmDialog from "components/commons/dialog/ConfirmDialog";
import AlertDialog from "components/commons/dialog/AlertDialog";
import ModalDialog from "components/commons/dialog/ModalDialog";

console.debug("DialogSample.js");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function DialogSample({
  confirmDialogOpen,
  onConfirmButtonClick,
  onConfirmDialogOkClick,
  onConfirmDialogClose,
  alertDialogOpen,
  onAlertButtonClick,
  onAlertDialogOkClick,
  onAlertDialogClose,
  modalDialogOpen,
  onModalButtonClick,
  onModalDialogOkClick,
  onModalDialogClose,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button variant="outlined" color="primary" onClick={onConfirmButtonClick}>
          확인 다이얼로그
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={onAlertButtonClick}>
          알림 다이얼로그
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={onModalButtonClick}>
          모달
        </Button>
      </div>
      <ConfirmDialog
        open={confirmDialogOpen}
        title="확인 다이얼로그"
        content="확인 다이얼로그 내용"
        onOkClick={onConfirmDialogOkClick}
        onClose={onConfirmDialogClose}
      />
      <AlertDialog
        open={alertDialogOpen}
        title="알림 다이얼로그"
        content="알림 다이얼로그 내용"
        onOkClick={onAlertDialogOkClick}
        onClose={onAlertDialogClose}
      />
      <ModalDialog open={modalDialogOpen} title="모달" onOkClick={onModalDialogOkClick} onClose={onModalDialogClose}>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
          ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </ModalDialog>
    </div>
  );
}
