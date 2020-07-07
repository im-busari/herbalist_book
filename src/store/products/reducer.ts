import { Reducer } from 'redux'
import { ProductsState, ProductsActionTypes } from './types'

// Type-safe initialState!
const initialState: ProductsState = {
  data: [],
  errors: undefined,
  loading: false
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const listReducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case ProductsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case ProductsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

const detailsReducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.DETAILS_REQUEST: {
      return { ...state, loading: true }
    }
    case ProductsActionTypes.DETAILS_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case ProductsActionTypes.DETAILS_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}


export { listReducer as productsListReducer, 
  detailsReducer as productsDetailsReducer }