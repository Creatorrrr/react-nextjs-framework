import React from "react";
import { useRouter } from "next/router";
import AppSidebar from "components/templates/app/AppSidebar";

console.debug("AppSidebarContainer.js");

export default function AppSidebarContainer() {
  const router = useRouter();

  /**
   * AgGrid 페이지로 이동
   */
  const goAgGridPage = () => {
    router.push("/aggrid");
  };

  /**
   * Snackbar 페이지로 이동
   */
  const goSnackbarPage = () => {
    router.push("/snackbar");
  };

  /**
   * Dialog 페이지로 이동
   */
  const goDialogPage = () => {
    router.push("/dialog");
  };

  /**
   * Tree 페이지로 이동
   */
  const goTreePage = () => {
    router.push("/tree");
  };

  /**
   * RcTree 페이지로 이동
   */
  const goRcTreePage = () => {
    router.push("/rctree");
  };

  /**
   * Util 페이지로 이동
   */
  const goUtilPage = () => {
    router.push("/util");
  };

  return (
    <AppSidebar
      onAgGridClick={goAgGridPage}
      onSnackbarClick={goSnackbarPage}
      onDialogClick={goDialogPage}
      onTreeClick={goTreePage}
      onRcTreeClick={goRcTreePage}
      onUtilClick={goUtilPage}
    />
  );
}
