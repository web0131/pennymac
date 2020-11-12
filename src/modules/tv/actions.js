import { createAction } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

/**
 * Constants
 */

export const LIST_TV = 'LIST_TV'

/**
 * Actions
 */

export const listTvRequest = createAction(LIST_TV)
export const listTvRequestSuccess = createAction(successAction(LIST_TV))
export const listTvRequestFail = createAction(failAction(LIST_TV))
