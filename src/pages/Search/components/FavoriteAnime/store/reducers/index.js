import { createReducer } from "typesafe-actions";

import { setLikeAnimeToStore } from "../actions";

const likeAnimeInitialState = {
  data: [],
};

const likeAnimeReducer = createReducer(likeAnimeInitialState).handleAction(
  setLikeAnimeToStore,
  (state, { payload }) => {
    return {
      data: [...payload],
    };
  }
);

export default likeAnimeReducer;
