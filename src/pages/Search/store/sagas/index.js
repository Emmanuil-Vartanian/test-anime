import { EFFECT_LOADING } from 'constants/effectLoading'
import { clearEffectLoading, setEffectLoading } from 'containers/App/store/actions'
import { all, call, put, takeLatest, select } from 'redux-saga/effects'

import { setContentToStore, setPaginationToStore, setQueryToStore } from '../actions'
import { searchAnimeAPI } from '../api'
import { contentInitialState, paginationInitialState, queryInitialState } from '../reducers'
import { contentSelector, paginationSelector } from '../reducers/selectors'
import { SearchAnimeActionTypes } from '../types'

export function* searchAnimeSaga(action) {
  const { data, query, errorApi } = action.payload
  const pagination = yield select(paginationSelector)
  const content = yield select(contentSelector)

  const dataForApi = {
    query,
    variables: {
      query: data,
      perPage: pagination.perPage,
      currentPage: pagination.currentPage
    }
  }

  try {
    if (!content.length) {
      yield put(setEffectLoading(EFFECT_LOADING.SEARCH_ANIME))
    }

    const result = yield call(searchAnimeAPI, dataForApi)

    if (!Object.keys(result).includes('errors')) {
      yield put(setQueryToStore(data))
      yield put(setContentToStore(result.data.Page.media))
      yield put(setPaginationToStore(result.data.Page.pageInfo))
      yield put(clearEffectLoading(EFFECT_LOADING.SEARCH_ANIME))
    } else {
      errorApi(result.errors[0])
    }
  } catch (error) {
    console.error(SearchAnimeActionTypes.SEARCH_ANIME, error)
    yield put(clearEffectLoading(EFFECT_LOADING.SEARCH_ANIME))
  }
}

export function* resetSearchSaga() {
  try {
    yield put(setQueryToStore(queryInitialState.data))
    yield put(setContentToStore(contentInitialState.data))
    yield put(setPaginationToStore(paginationInitialState.data))
  } catch (error) {
    const { response } = error
    console.error(SearchAnimeActionTypes.RESET_SEARCH, response)
  }
}

export default function* root() {
  yield all([
    takeLatest(SearchAnimeActionTypes.SEARCH_ANIME, searchAnimeSaga),
    takeLatest(SearchAnimeActionTypes.RESET_SEARCH, resetSearchSaga)
  ])
}
