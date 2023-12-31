/** @format */

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { persistor, store };
