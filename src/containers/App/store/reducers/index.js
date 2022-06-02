import { createReducer } from 'typesafe-actions'

import { setEffectLoading, clearEffectLoading } from '../actions'

export const initialState = {
  loading: {}
}

const appReducers = createReducer(initialState)
  .handleAction(setEffectLoading, (state, { payload }) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.name]: true
      }
    }
  })
  .handleAction(clearEffectLoading, (state, { payload }) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.name]: false
      }
    }
  })

export default appReducers
