import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import createRootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const createPersistedStore = () => {
  const persistedCombinedReducers = rootReducer;
  const store = createStore(
    persistedCombinedReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers").default);
    });
  }

  const persistor = persistStore(store);
  return { store, persistor };
};

const persistedStore = createPersistedStore();
export default persistedStore;
