import { useState } from "react";
import { useSelector } from "react-redux";
import { Async } from "react-async";
import CenterCircularProgress from "components/commons/progress/CenterCircularProgress";
import SnackbarMessage from "components/commons/snackbar/SnackbarMessage";
import DataGridSample from "components/templates/datagrid/DataGridSample";
import NodeApi from "apis/node-api";
import { HttpStatus } from "constants/http-constants";

export default function DataGridSampleContainer() {
  const user = useSelector((state) => state.session.user);
  const [nodeId, setNodeId] = useState(user.group.nodeId);

  /**
   * 이름 클릭 시 이벤트
   */
  const changeNodeId = (params) => {
    setNodeId(params.row.nodeId);
  };

  return (
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
    >
      <Async.Fulfilled>
        {(data) =>
          HttpStatus.OK === data.data.status ? (
            <DataGridSample
              rows={data.data.result.list.map((item) => ({
                id: item.nodeId,
                ...item,
              }))}
              pageSize={10}
              onNameClick={changeNodeId}
            />
          ) : (
            <SnackbarMessage severity="error" title="Error" message={`에러: ${data.data.message}`} />
          )
        }
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <SnackbarMessage severity="error" title="Error" message={`에러: ${error.message}`} />}</Async.Rejected>
      <Async.Loading>
        <CenterCircularProgress />
      </Async.Loading>
    </Async>
  );
}
