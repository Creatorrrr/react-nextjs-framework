import { useRouter } from "next/router";
import { useEffect } from "react";
import CenterCircularProgress from "components/commons/progress/CenterCircularProgress";

console.log("pages/routing/index.js");

export default function Routing() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/routing/aggrid");
  });

  return <CenterCircularProgress />;
}
