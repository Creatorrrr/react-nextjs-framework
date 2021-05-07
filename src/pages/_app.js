import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextReduxWrapper from "stores";

function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default NextReduxWrapper.withRedux(MyApp);
