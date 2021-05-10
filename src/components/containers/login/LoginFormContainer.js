import React, { useState, useEffect } from "react";
import { HttpStatus } from "constants/http-constants";
import UserApi from "apis/user-api";
import LoginForm from "components/templates/login/LoginForm";
import CommonUtil from "utils/common-util";
import { useDispatch } from "react-redux";
import { setUser } from "stores/session";
import { useRouter } from "next/router";


console.debug("LoginFormContainer.js");

export default function LoginFormContainer() {
  const router = useRouter();
  const dispatcher = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoginId, setKeepLoginId] = useState(false);

  useEffect(() => {
    const localStorageLoginId = CommonUtil.getLocalStorageItem("loginId", "");
    const localStorageKeepLoginId = CommonUtil.getLocalStorageItem("keepLoginId", false);
    if (!loginId) setLoginId(localStorageLoginId);
    if (!keepLoginId) setKeepLoginId(localStorageKeepLoginId);
  });

  /**
   * 로그인
   */
  const login = async () => {
    try {
      const response = await UserApi.login({
        loginId: loginId,
        pwd: password,
      });

      if (HttpStatus.OK === response.data.status) {
        // session에 토큰값 저장
        sessionStorage.token = response.data.result.token;

        // session store에 사용자 정보 저장
        const user = response.data.result;
        dispatcher(setUser(user));

        // 로그인 아이디와 저장여부 저장
        if (keepLoginId && loginId) {
          localStorage.keepLoginId = keepLoginId;
          localStorage.loginId = loginId;
        } else {
          localStorage.keepLoginId = false;
          localStorage.loginId = "";
        }
        router.replace("/aggrid");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LoginForm
      loginId={loginId}
      onLoginIdChanged={setLoginId}
      password={password}
      onPasswordChanged={setPassword}
      keepLoginId={keepLoginId}
      onKeepLoginIdChanged={setKeepLoginId}
      onLoginSubmit={login}
    />
  );
}
