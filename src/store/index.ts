import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { History } from 'history'

import { productsSaga } from './products/sagas'
import { productsListReducer } from './products/reducer'
import { ProductsState } from './products/types'

// The top-level state object
export interface ApplicationState {
  productsList: ProductsState
}

//  The reducers' names should match the names in the ApplicationState
export const createRootReducer = (history: History) =>
  combineReducers({
    productsList: productsListReducer,
  })

export function* rootSaga() {
  yield all([
    fork(productsSaga)
  ])
}

