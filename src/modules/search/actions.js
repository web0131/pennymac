import { createAction } from 'redux-actions'

/**
 * Constants
 */

export const SEARCH = 'SEARCH'

/**
 * Actions
 */

export const searchRequest = createAction(SEARCH)
