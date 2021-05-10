import NodeApi from "apis/node-api";
import { HttpStatus } from "constants/http-constants";
import { useSelector } from "react-redux";
import Async from "components/commons/async/Async";
import CenterCircularProgress from "components/commons/progress/CenterCircularProgress";
import SnackbarMessage from "components/commons/snackbar/SnackbarMessage";
import TreeSample from "components/templates/tree/TreeSample";

console.debug("TreeSampleContainer.js");

export default function TreeSampleContainer() {
  const user = useSelector((state) => state.session.user);

  return (
    <Async
      promiseFn={NodeApi.getNodeList}
      params={{
        nodeTypeCodes: ["GROUP", "FOLDER", "TRASH", "DIRECTORY"],
        field: "name",
        rootNodeId: user.group.entCode,
        rootEntCode: user.group.entCode,
        mode: "jstree-path",
      }}
      watch={user}
      onSuccess={(data) => {
        return HttpStatus.OK === data.data.status ? (
          <TreeSample nodes={data.data.result} />
        ) : (
          <SnackbarMessage severity="error" title="Error" message={`에러: ${data.data.message}`} />
        );
      }}
      onError={(error) => <SnackbarMessage severity="error" title="Error" message={`에러: ${error.message}`} />}
      onLoading={() => <CenterCircularProgress />}
    />
  );
}
