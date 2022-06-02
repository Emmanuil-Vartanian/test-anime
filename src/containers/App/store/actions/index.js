import { createAction } from 'typesafe-actions'

import { ActionTypes } from '../types'

const setEffectLoading = createAction(ActionTypes.SET_EFFECT_LOADING, name => ({
  name
}))()

const clearEffectLoading = createAction(ActionTypes.CLEAR_EFFECT_LOADING, name => ({
  name
}))()

export { setEffectLoading, clearEffectLoading }
