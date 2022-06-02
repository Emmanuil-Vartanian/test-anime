import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchReducers from "pages/Search/store/reducers";
import likeAnimeReducer from "pages/Search/components/FavoriteAnime/store/reducers";
import appReducers from "containers/App/store/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const createRootReducer = () => {
  return persistCombineReducers(persistConfig, {
    app: appReducers,
    search: searchReducers,
    likeAnime: likeAnimeReducer
  });
};

export default createRootReducer;
