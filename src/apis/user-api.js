import httpUtil from "utils/http-util";
import SHA256 from "crypto-js/sha256";

console.debug("user-api.js");

const UserApi = {
  async login(params) {
    return await httpUtil.post({
      url: "/api/login",
      data: {
        loginId: params.loginId,
        pwd: SHA256(params.pwd).toString().toUpperCase(),
      },
    });
  },
};

export default UserApi;
