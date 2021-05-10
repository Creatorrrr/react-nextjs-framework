import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import App from "components/templates/app/App";

console.debug("AppContainer.js");

export default function AppContainer({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.session.user);

  // 로그인 여부 확인 (미인증 시 로그인 화면으로)
  if (!user) router.replace("/login");

  return <App>{children}</App>;
}
