import { createAction } from "typesafe-actions";
import { FavoriteAnimeActionTypes } from "../types";

/* SAGA ACTIONS */
const likeAnime = createAction(
  FavoriteAnimeActionTypes.LIKE_ANIME,
  (anime) => anime
)();

/* REDUCER ACTIONS */
const setLikeAnimeToStore = createAction(
  FavoriteAnimeActionTypes.SET_LIKE_ANIME_TO_STORE,
  (anime) => anime
)();

export { likeAnime, setLikeAnimeToStore };
