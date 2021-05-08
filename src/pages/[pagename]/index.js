import React from "react";
import { useRouter } from "next/router";
import App from "components/templates/app/App";
import DialogSampleContainer from "components/containers/dialog/DialogSampleContainer";

const Dynamic = () => {
  const router = useRouter();
  const { pagename } = router.query;
  return (
    <div>
      {pagename === "dialog" ? (
        <App>
          <DialogSampleContainer />
        </App>
      ) : null}
    </div>
  );
};

export default Dynamic;
