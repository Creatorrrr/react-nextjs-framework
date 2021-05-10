import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import App from "components/templates/app/App";

console.debug("AppContainer.js");

export default function AppContainer({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) router.replace("/login");
  });

  return <App>{children}</App>;
}
