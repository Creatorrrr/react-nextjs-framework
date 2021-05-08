import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useTranslation } from "react-i18next";

console.debug("ConfirmDialog.js");

export default function ConfirmDialog({ open, title, content, children, onOkClick, onClose }) {
  const { t } = useTranslation("confirmDialog");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children || <DialogContentText>{content}</DialogContentText>}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t("CANCEL")}
        </Button>
        <Button onClick={onOkClick} color="primary" autoFocus>
          {t("OK")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
