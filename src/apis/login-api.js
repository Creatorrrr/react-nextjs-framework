import httpUtil from "utils/http-util";
import SHA256 from "crypto-js/sha256";

console.debug("login-api.js");

const LoginApi = {
  /**
   * 로그인을 요청한다.
   */
  async login({ params, headers }) {
    return await httpUtil.post({
      url: "/api/login",
      headers,
      data: {
        loginId: params.loginId,
        pwd: SHA256(params.pwd).toString().toUpperCase(),
      },
    });
  },

  /**
   * 현재 사용자를 조회한다. (세션 확인)
   */
  async session({ params, headers }) {
    console.log(params)
    console.log(headers)
    return httpUtil.get({
      url: "/api/session",
      headers,
      params: {
        mode: params.mode,
      },
    });
  },
};

export default LoginApi;
