import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "stores/session";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import AppHeader from "components/templates/app/AppHeader";
import { useState } from "react";
import { useTranslation } from "react-i18next";

console.debug("AppHeaderContainer.js");

export default function AppHeaderContainer() {
  const router = useRouter();
  const dispatcher = useDispatch();
  const { i18n } = useTranslation();
  
  const [language, setLanguage] = useState(i18n.language);

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
    dispatcher(setUser(null));
    router.replace("/login");
  };

  /**
   * 언어 변경
   */
  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return <AppHeader title="리액트 프레임워크" language={language} onTitleClick={goMain} onLogoutClick={logout} onLanguageChange={changeLanguage} />;
}
