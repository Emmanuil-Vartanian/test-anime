import { createAction } from "typesafe-actions";
import { SearchAnimeActionTypes } from "../types";

/* SAGA ACTIONS */
const searchAnime = createAction(
  SearchAnimeActionTypes.SEARCH_ANIME,
  (data, errorApi) => {
    const query = `
      query ($query: String, $currentPage: Int, $perPage: Int) {
        Page(page: $currentPage, perPage: $perPage ) {
          pageInfo {
            perPage
            currentPage
            hasNextPage
          }
          media(search: $query, type: ANIME) {
            id
            title {
              romaji
              native
            }
            coverImage {
              large
            }
          }
        }
      }
    `;

    return { data, query, errorApi };
  }
)();

const resetSearch = createAction(SearchAnimeActionTypes.RESET_SEARCH)();

/* REDUCER ACTIONS */
const setContentToStore = createAction(
  SearchAnimeActionTypes.SET_SEARCH_ANIME_TO_STORE,
  (groups) => groups
)();

const setPaginationToStore = createAction(
  SearchAnimeActionTypes.SET_PAGINATION_TO_STORE,
  (pagination) => pagination
)();

const setQueryToStore = createAction(
  SearchAnimeActionTypes.SET_QUERY_TO_STORE,
  (query) => query
)();

export {
  searchAnime,
  setContentToStore,
  setPaginationToStore,
  setQueryToStore,
  resetSearch,
};
