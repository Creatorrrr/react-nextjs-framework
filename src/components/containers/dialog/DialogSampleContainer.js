import { useState } from "react";
import DialogSample from "components/templates/dialog/DialogSample";

console.debug("DialogSampleContainer.js");

export default function DialogSampleContainer() {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [modalDialogOpen, setModalDialogOpen] = useState(false);

  /**
   * 확인 다이얼로그 열기
   */
  const openConfirmButton = () => {
    setConfirmDialogOpen(true);
  };

  /**
   * 확인 다이얼로그 닫기
   */
  const closeConfirmButton = () => {
    setConfirmDialogOpen(false);
  };

  /**
   * 알림 다이얼로그 열기
   */
  const openAlertButton = () => {
    setAlertDialogOpen(true);
  };

  /**
   * 알림 다이얼로그 닫기
   */
  const closeAlertButton = () => {
    setAlertDialogOpen(false);
  };

  /**
   * 모달 열기
   */
  const openModalButton = () => {
    setModalDialogOpen(true);
  };

  /**
   * 모달 닫기
   */
  const closeModalButton = () => {
    setModalDialogOpen(false);
  };

  return (
    <DialogSample
      confirmDialogOpen={confirmDialogOpen}
      onConfirmButtonClick={openConfirmButton}
      onConfirmDialogOkClick={closeConfirmButton}
      onConfirmDialogClose={closeConfirmButton}
      alertDialogOpen={alertDialogOpen}
      onAlertButtonClick={openAlertButton}
      onAlertDialogOkClick={closeAlertButton}
      onAlertDialogClose={closeAlertButton}
      modalDialogOpen={modalDialogOpen}
      onModalButtonClick={openModalButton}
      onModalDialogOkClick={closeModalButton}
      onModalDialogClose={closeModalButton}
    />
  );
}
