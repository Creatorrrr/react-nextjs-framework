import { useState } from "react";
import NodeApi from "apis/node-api";
import AgGridSample from "components/templates/aggrid/AgGridSample";
import Async from "components/commons/async/Async";
import { HttpStatus } from "constants/http-constants";
import SnackbarMessage from "components/commons/snackbar/SnackbarMessage";
import CommonUtil from "utils/common-util";
import CenterCircularProgress from "components/commons/progress/CenterCircularProgress";

console.debug("AgGridSampleContainer.js");

export default function AgGridSampleContainer({ nodeList }) {
  const [nodeId, setNodeId] = useState(null);

  const setGridApi = useState(null)[1];
  const setGridColumnApi = useState(null)[1];

  /**
   *  그리드 초기화 이벤트
   */
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  /**
   * 이름 클릭 시 이벤트
   */
  const changeNodeId = (params) => {
    if (params.data.nodeTypeCode === "DOCUMENT") {
      const link = document.createElement("a");

      link.setAttribute("download", params.data.name);
      link.style.display = "none";

      document.body.appendChild(link);

      link.setAttribute("href", `/api/nodes/${encodeURIComponent(params.data.uuid)}/content?token=${CommonUtil.getSessionStorageItem("token")}`);
      link.click();

      document.body.removeChild(link);
    } else {
      setNodeId(params.data.nodeId);
    }
  };

  return nodeId ? (
    <Async
      promiseFn={NodeApi.getNodeChildren}
      params={{
        nodeId,
        nodeTypeCodes: ["FOLDER", "DOCUMENT", "TRASH", "DIRECTORY"],
        orders: [
          { field: "useYn", direction: "asc" },
          { field: "sortKey", direction: "asc" },
          { field: "dkName", direction: "asc" },
          { field: "regDate", direction: "asc" },
        ],
        mode: "detail",
      }}
      watch={nodeId}
      onSuccess={(data) => {
        return HttpStatus.OK === data.data.status ? (
          <AgGridSample onGridReady={onGridReady} rowData={data.data.result.list} onNameClick={changeNodeId} />
        ) : (
          <SnackbarMessage severity="error" title="Error" message={`에러: ${data.data.message}`} />
        );
      }}
      onError={(error) => <SnackbarMessage severity="error" title="Error" message={`에러: ${error.message}`} />}
      onLoading={() => <CenterCircularProgress />}
    />
  ) : (
    <AgGridSample onGridReady={onGridReady} rowData={nodeList} onNameClick={changeNodeId} />
  );
}
