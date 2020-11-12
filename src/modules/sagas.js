import { all } from 'redux-saga/effects'

import tvSagas from './tv/sagas'
import episodeSaga from './episodes/sagas'

export default function* rootSaga() {
  yield all([tvSagas(), episodeSaga()])
}
