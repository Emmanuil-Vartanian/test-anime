import { createSelector } from "reselect";

const contentState = (state) => state.search.content.data;
const paginationState = (state) => state.search.pagination.data;
const queryState = (state) => state.search.query.data;

export const contentSelector = createSelector(
  [contentState],
  (result) => result
);

export const paginationSelector = createSelector(
  [paginationState],
  (result) => result
);

export const querySelector = createSelector([queryState], (result) => result);
