import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { IS_DEV } from "constants/global-constants";
import setting from "./setting";
import session from "./session";

console.debug("stores/index.js");

const middlewares = [];

// 개발환경일 경우 redux logger 미들웨어 설정
if (IS_DEV) {
  middlewares.push(logger);
}

const makeStore = () => {
  const rootPersistConfig = {
    key: "root",
    storage,
  };

  const combinedReducer = combineReducers({
    setting,
    session,
  });

  const rootReducer = persistReducer(rootPersistConfig, combinedReducer);

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...middlewares],
    devTools: IS_DEV,
  });
  store.persistor = persistStore(store);

  return store;
};

const NextReduxWrapper = createWrapper(makeStore, { debug: IS_DEV ? true : false });

export default NextReduxWrapper;
