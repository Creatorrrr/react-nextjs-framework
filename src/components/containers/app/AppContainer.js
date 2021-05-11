import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import App from "components/templates/app/App";
import CommonUtil from "utils/common-util";

console.debug("AppContainer.js");

export default function AppContainer({ children }) {
  const router = useRouter();

  useEffect(() => {
    const user = CommonUtil.getSessionStorageItem("user", null);
    if (!user) router.replace("/login");
  });

  return <App>{children}</App>;
}
