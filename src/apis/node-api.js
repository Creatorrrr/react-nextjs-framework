import httpUtil from "utils/http-util";

console.debug("node-api.js");

const NodeApi = {
  async getNodeList(params) {
    return await httpUtil.send({
      url: `/api/nodes`,
      method: "GET",
      params: {
        nodeTypeCodes: JSON.stringify(params.nodeTypeCodes),
        field: params.field,
        keyword: params.keyword,
        orders: JSON.stringify(params.orders),
        paging: JSON.stringify(params.paging),
        nodeId: params.nodeId,
        rootNodeId: params.rootNodeId,
        rootEntCode: params.rootEntCode,
        mode: params.mode,
        writableYn: params.writableYn,
        readableYn: params.readableYn,
        editableYn: params.editableYn,
        deletableYn: params.deletableYn,
        authNodeTypeCodes: JSON.stringify(params.authNodeTypeCodes),
      },
    });
  },
  async getNodeChildren(params) {
    return await httpUtil.get({
      url: `/api/nodes/${encodeURIComponent(params.nodeId)}/children`,
      params: {
        nodeId: params.nodeId,
        rootNodeId: params.rootNodeId,
        rootEntCode: params.rootEntCode,
        id: params.id,
        nodeTypeCodes: JSON.stringify(params.nodeTypeCodes),
        field: params.field,
        keyword: params.keyword,
        orders: JSON.stringify(params.orders),
        paging: JSON.stringify(params.paging),
        mode: params.mode,
        writableYn: params.writableYn,
        readableYn: params.readableYn,
        editableYn: params.editableYn,
        deletableYn: params.deletableYn,
        authNodeTypeCodes: JSON.stringify(params.authNodeTypeCodes),
      },
    });
  },
};

export default NodeApi;
