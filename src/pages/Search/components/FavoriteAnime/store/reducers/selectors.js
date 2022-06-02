import { createSelector } from "reselect";

const likeAnimeState = (state) => state.likeAnime.data;

export const likeAnimeSelector = createSelector(
  [likeAnimeState],
  (result) => result
);
