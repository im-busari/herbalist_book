import { action } from 'typesafe-actions'
import { ProductsActionTypes, IProduct } from './types'

// `typesafe-actions` provides really useful helpers for writing Redux actions in a type-safe manner.
export const fetchRequest = () => action(ProductsActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: IProduct[]) => action(ProductsActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ProductsActionTypes.FETCH_ERROR, message)
