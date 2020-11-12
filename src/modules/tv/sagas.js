import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { notification } from 'antd'

import { LIST_TV, listTvRequestSuccess, listTvRequestFail } from './actions'

import { getHeaders, getErrorMessage } from 'utils/auth-helpers'

export function* listTvRequestHandler({ payload }) {
  const params = {
    url: '/search/shows',
    method: 'get',
    headers: getHeaders(),
    params: {
      q: payload.search || '',
    },
  }
  try {
    const res = yield call(axios.request, params)
    yield put(listTvRequestSuccess(res.data))
  } catch (err) {
    const res = listTvRequestFail(getErrorMessage(err.response))
    yield put(res)
    notification.open({
      message: 'Error Found',
      description: res.payload,
    })
  }
}

export default function* tvSaga() {
  yield takeLatest(LIST_TV, listTvRequestHandler)
}
