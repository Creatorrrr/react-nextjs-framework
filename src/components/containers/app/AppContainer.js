import { useHistory, useRouteMatch } from "react-router";
import { matchRoutes, renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";
import routes from "configs/router-config";
import App from "components/templates/app/App";

console.debug("AppContainer.js");

export default function AppContainer() {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const matchedRoutes = matchRoutes(routes, routeMatch.path);
  const isMatched = Array.isArray(matchedRoutes) && matchedRoutes.length > 0;
  const route = isMatched ? matchedRoutes[0].route : null;

  const user = useSelector((state) => state.session.user);

  // 로그인 여부 확인 (미인증 시 로그인 화면으로)
  if (!user) history.replace("/login");

  return <App>{renderRoutes(route.routes)}</App>;
}
