import { handleActions } from 'redux-actions'

import { SEARCH } from './actions'

const initialState = {
  search: '',
  status: null,
  error: null,
}

export default handleActions(
  {
    [SEARCH]: (state, { payload, type }) => ({
      ...state,
      search: payload,
      status: type,
      error: null,
    }),
  },
  initialState,
)
