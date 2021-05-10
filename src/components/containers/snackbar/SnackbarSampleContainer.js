import { useSnackbar } from "notistack";
import SnackbarSample from "components/templates/snackbar/SnackbarSample";

console.debug("SnackbarSampleContainer.js");

export default function SnackbarSampleContainer() {
  const { enqueueSnackbar } = useSnackbar();

  /**
   * Success 스낵바
   */
  const popupSuccessSnackbar = () => {
    enqueueSnackbar({
      severity: "success",
      title: "Success",
      message: "Success 스낵바!",
    });
  };

  /**
   * Info 스낵바
   */
  const popupInfoSnackbar = () => {
    enqueueSnackbar({
      severity: "info",
      title: "Info",
      message: "Info 스낵바!",
    });
  };

  /**
   * Warning 스낵바
   */
  const popupWarningSnackbar = () => {
    enqueueSnackbar({
      severity: "warning",
      title: "Warning",
      message: "Warning 스낵바!",
    });
  };

  /**
   * Error 스낵바
   */
  const popupErrorSnackbar = () => {
    enqueueSnackbar({
      severity: "error",
      title: "Error",
      message: "Error 스낵바!",
    });
  };

  return <SnackbarSample onSuccessClicked={popupSuccessSnackbar} onInfoClicked={popupInfoSnackbar} onWarningClicked={popupWarningSnackbar} onErrorClicked={popupErrorSnackbar} />;
}
