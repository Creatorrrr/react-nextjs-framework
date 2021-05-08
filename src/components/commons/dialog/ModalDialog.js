import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

console.debug("ModalDialog.js");

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function ModalDialog({ open, title, content, children, onOkClick, onClose }) {
  const classes = useStyles();

  const { t } = useTranslation("modalDialog");

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        <IconButton className={classes.close} onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children || <DialogContentText>{content}</DialogContentText>}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onOkClick} color="primary">
          {t("OK")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
