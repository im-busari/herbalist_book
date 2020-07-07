import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { History } from 'history'

import { productsSaga } from './products/sagas'
import { productsListReducer, productsDetailsReducer } from './products/reducer'
import { ProductsState } from './products/types'

// The top-level state object
export interface ApplicationState {
  productsList: ProductsState
  productsDetails: ProductsState
}

//  The reducers' names should match the names in the ApplicationState
export const createRootReducer = (history: History) =>
  combineReducers({
    productsList: productsListReducer,
    productsDetails: productsDetailsReducer,
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([
    fork(productsSaga)
  ])
}