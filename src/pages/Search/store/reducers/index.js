import { createReducer } from "typesafe-actions";
import { combineReducers } from "redux";

import {
  setContentToStore,
  setPaginationToStore,
  setQueryToStore,
} from "../actions";

export const contentInitialState = {
  data: [],
};

export const paginationInitialState = {
  data: {
    perPage: 3,
    currentPage: 1,
    hasNextPage: null,
  },
};

export const queryInitialState = {
  data: "",
};

const contentsReducer = createReducer(contentInitialState).handleAction(
  setContentToStore,
  (state, { payload }) => {
    return {
      data: [...payload],
    };
  }
);

const paginationReducer = createReducer(paginationInitialState).handleAction(
  setPaginationToStore,
  (state, { payload }) => {
    return {
      data: { ...payload },
    };
  }
);

const queryReducer = createReducer(queryInitialState).handleAction(
  setQueryToStore,
  (state, { payload }) => {
    return {
      data: payload,
    };
  }
);

const searchReducers = combineReducers({
  content: contentsReducer,
  pagination: paginationReducer,
  query: queryReducer,
});

export default searchReducers;
