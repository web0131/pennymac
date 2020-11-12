import { handleActions } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

import { LIST_TV } from './actions'

const initialState = {
  listTv: [],
  tv: null,
  loading: false,
  status: null,
  error: null,
}

export default handleActions(
  {
    [LIST_TV]: (state, { type }) => ({
      ...state,
      listTv: null,
      tv: null,
      loading: true,
      status: type,
      error: null,
    }),
    [successAction(LIST_TV)]: (state, { payload, type }) => ({
      ...state,
      listTv: payload,
      tv: null,
      loading: false,
      status: type,
      error: null,
    }),
    [failAction(LIST_TV)]: (state, { payload, type }) => ({
      ...state,
      listTv: null,
      tv: null,
      loading: false,
      status: type,
      error: payload,
    }),
  },
  initialState,
)
