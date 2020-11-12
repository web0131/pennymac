import { createAction } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

/**
 * Constants
 */

export const GET_EPISODES = 'GET_EPISODES'

/**
 * Actions
 */

export const getEpisodesRequest = createAction(GET_EPISODES)
export const getEpisodesRequestSuccess = createAction(
  successAction(GET_EPISODES),
)
export const getEpisodesRequestFail = createAction(failAction(GET_EPISODES))
