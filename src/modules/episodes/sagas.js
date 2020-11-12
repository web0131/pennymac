import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { notification } from 'antd'

import {
  GET_EPISODES,
  getEpisodesRequestSuccess,
  getEpisodesRequestFail,
} from './actions'

import { getHeaders, getErrorMessage } from 'utils/auth-helpers'

export function* getEpisodesRequestHandler({ payload }) {
  console.log('sagas', payload.id)
  const params = {
    url: `/shows/${payload.id}/episodes`,
    method: 'get',
    headers: getHeaders(),
    params: {},
  }
  try {
    const res = yield call(axios.request, params)
    yield put(getEpisodesRequestSuccess(res.data))
  } catch (err) {
    const res = getEpisodesRequestFail(getErrorMessage(err.response))
    yield put(res)
    notification.open({
      message: 'Error Found',
      description: res.payload,
    })
  }
}

export default function* episodesSaga() {
  yield takeLatest(GET_EPISODES, getEpisodesRequestHandler)
}
