import { Fragment } from "react";
import Head from "next/head";
import LoginFormContainer from "components/containers/login/LoginFormContainer";

console.log("pages/login/index.js");

export default function Login() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginFormContainer />
    </Fragment>
  );
}
