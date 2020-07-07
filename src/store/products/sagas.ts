import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ProductsActionTypes } from './types'
import { fetchError, fetchSuccess, detailsError, detailsSuccess } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function"
function* handleFetch() {
  try {
    // for async functions we use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT, '/products')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* handleDetails() {
  try {
    // for async functions we use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT, `/products/`)

    if (res.error) {
      yield put(detailsError(res.error))
    } else {
      yield put(detailsSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(detailsError(err.stack!))
    } else {
      yield put(detailsError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ProductsActionTypes.FETCH_REQUEST, handleFetch)
}
function* watchDetailsRequest() {
  yield takeEvery(ProductsActionTypes.DETAILS_REQUEST, handleDetails)
}

// We use `fork()` here to split our saga into multiple watchers and export it.
export function* productsSaga() {
  yield all([
    fork(watchFetchRequest),
    fork(watchDetailsRequest)
  ])
}