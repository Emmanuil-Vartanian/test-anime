import { all, put, select, takeLatest } from "redux-saga/effects";

import { setLikeAnimeToStore } from "../actions";
import { likeAnimeSelector } from "../reducers/selectors";
import { FavoriteAnimeActionTypes } from "../types";

export function* likeAnimeSaga(action) {
  const anime = action.payload;
  const likeAnime = yield select(likeAnimeSelector);

  try {
    yield put(setLikeAnimeToStore([...likeAnime, anime]));
  } catch (error) {
    const { response } = error;
    console.error(FavoriteAnimeActionTypes.LIKE_ANIME, response);
  }
}

export default function* root() {
  yield all([takeLatest(FavoriteAnimeActionTypes.LIKE_ANIME, likeAnimeSaga)]);
}
