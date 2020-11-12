import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import tvReducer from './tv/reducers'
import searchReducer from './search/reducers'
import episodeReducer from './episodes/reducers'

const rootReducer = combineReducers({
  form,
  tv: tvReducer,
  search: searchReducer,
  episode: episodeReducer,
})

export default rootReducer
