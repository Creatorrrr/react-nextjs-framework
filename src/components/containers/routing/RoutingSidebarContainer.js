import React from "react";
import { useRouter } from "next/router";
import RoutingSidebar from "components/templates/routing/RoutingSidebar";

console.debug("RoutingSidebarContainer.js");

export default function RoutingSidebarContainer() {
  const router = useRouter();

  /**
   * Routing 하위 AgGrid 페이지로 이동
   */
  const goAgGridPage = () => {
    router.push("/routing/aggrid");
  };

  /**
   * Routing 하위 Snackbar 페이지로 이동
   */
  const goSnackbarPage = () => {
    router.push("/routing/snackbar");
  };

  /**
   * Routing 하위 Dialog 페이지로 이동
   */
  const goDialogPage = () => {
    router.push("/routing/dialog");
  };

  /**
   * Routing 하위 Tree 페이지로 이동
   */
  const goTreePage = () => {
    router.push("/routing/tree");
  };

  /**
   * Routing 하위 RcTree 페이지로 이동
   */
  const goRcTreePage = () => {
    router.push("/routing/rctree");
  };

  /**
   * Routing 하위 Util 페이지로 이동
   */
  const goUtilPage = () => {
    router.push("/routing/util");
  };

  return (
    <RoutingSidebar
      onAgGridClick={goAgGridPage}
      onSnackbarClick={goSnackbarPage}
      onDialogClick={goDialogPage}
      onTreeClick={goTreePage}
      onRcTreeClick={goRcTreePage}
      onUtilClick={goUtilPage}
    />
  );
}
