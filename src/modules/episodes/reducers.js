import { handleActions } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

import { GET_EPISODES } from './actions'

const initialState = {
  episodes: null,
  status: null,
  error: null,
}

export default handleActions(
  {
    [GET_EPISODES]: (state, { payload, type }) => ({
      ...state,
      episodes: null,
      status: type,
      error: null,
    }),
    [successAction(GET_EPISODES)]: (state, { payload, type }) => ({
      ...state,
      episodes: payload,
      status: type,
      error: null,
    }),
    [failAction(GET_EPISODES)]: (state, { payload, type }) => ({
      ...state,
      episodes: null,
      loading: false,
      status: type,
      error: payload,
    }),
  },
  initialState,
)
