import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { History } from 'history'

import { productsSaga } from './products/sagas'
import { productsReducer } from './products/reducer'
import { ProductsState } from './products/types'

// The top-level state object
export interface ApplicationState {
  products: ProductsState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    products: productsReducer,
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([
    fork(productsSaga)
  ])
}