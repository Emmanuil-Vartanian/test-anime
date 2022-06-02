import { all, fork } from "redux-saga/effects";

import SearchAnimeSaga from "pages/Search/store/sagas";
import FavoriteAnimeSaga from "pages/Search/components/FavoriteAnime/store/sagas";

export default function* rootSaga() {
  yield all([fork(SearchAnimeSaga), fork(FavoriteAnimeSaga)]);
}
