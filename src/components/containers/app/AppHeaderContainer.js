import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { setUser } from "stores/session";
import AppHeader from "components/templates/app/AppHeader";

console.debug("AppHeaderContainer.js");

export default function AppHeaderContainer() {
  const router = useRouter();
  // const dispatcher = useDispatch();

  /**
   * 메인화면으로 이동
   */
  const goMain = () => {
    router.replace("/");
  };

  /**
   * 로그아웃
   */
  const logout = () => {
    // dispatcher(setUser(null));
    router.replace("/login");
  };

  /**
   * 언어 변경
   */
  const changeLanguage = (event) => {
    console.log("changeLanguage");
  };

  return <AppHeader title="리액트 프레임워크" language={'ko-KR'} onTitleClick={goMain} onLogoutClick={logout} onLanguageChange={changeLanguage} />;
}
