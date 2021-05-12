import axios from "axios";
import CommonUtil from "./common-util";
import { PREFIX_URL, HTTP_TIMEOUT } from "constants/http-constants";

console.debug("http-util.js");

const HttpUtil = {
  async send(params) {
    const token = CommonUtil.getCookie("token");
    const options = {
      ...params,
      url: PREFIX_URL + params.url,
      timeout: params.timeout || HTTP_TIMEOUT,
      headers: {
        Authorization: token || "",
        ...params.headers,
      },
    };

    return await axios(options);
  },

  async get(params) {
    return await this.send({
      ...params,
      method: "get",
    });
  },

  async post(params) {
    return await this.send({
      ...params,
      method: "post",
    });
  },

  async put(params) {
    return await this.send({
      ...params,
      method: "put",
    });
  },

  async patch(params) {
    return await this.send({
      ...params,
      method: "patch",
    });
  },

  async delete(params) {
    return await this.send({
      ...params,
      method: "delete",
    });
  },
};

export default HttpUtil;
