import { useRouter } from "next/router";
import { useEffect } from "react";
import App from "components/templates/app/App";
import CommonUtil from "utils/common-util";

console.debug("AppContainer.js");

export default function AppContainer({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = CommonUtil.getCookie("token");
    if (!token) router.replace("/login");
  });

  return <App>{children}</App>;
}
