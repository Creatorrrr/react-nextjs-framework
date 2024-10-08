import httpUtil from "utils/http-util";

console.debug("node-api.js");

const NodeApi = {
  async getNodeList({ params, headers }) {
    return await httpUtil.get({
      url: `/api/nodes`,
      headers,
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
  async getNodeChildren({ params, headers }) {
    return await httpUtil.get({
      url: `/api/nodes/${encodeURIComponent(params.nodeId)}/children`,
      headers,
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
