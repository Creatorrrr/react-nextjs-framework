import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useTranslation } from "react-i18next";

console.debug("AlertDialog.js");

export default function AlertDialog({ open, title, content, children, onOkClick, onClose }) {
  const { t } = useTranslation("alertDialog");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children || <DialogContentText>{content}</DialogContentText>}</DialogContent>
      <DialogActions>
        <Button onClick={onOkClick} color="primary" autoFocus>
          {t("OK")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
