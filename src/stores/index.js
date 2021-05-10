import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
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

// 로컬 스토리지에 저장할 state 설정
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["setting"],
};

// 세션 스토리지에 저장할 state 설정
const sessionPersistConfig = {
  key: "session",
  storage: storageSession,
};

const combinedReducer = combineReducers({
  setting,
  session: persistReducer(sessionPersistConfig, session),
});

const rootReducer = persistReducer(rootPersistConfig, combinedReducer);

const makeStore = () => {
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
