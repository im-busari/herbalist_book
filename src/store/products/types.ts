export interface IProduct {
    _id: string;
    image: string;
    price: number;
    pricePerAmount: string;
    name: string;
    description: string;
}
  
  // A shorthand for `{ [key: string]: any }`. I can replace `any` with
  // the expected return type of my API respons
  export type ApiResponse = Record<string, any>
  
  export enum ProductsActionTypes {
    FETCH_REQUEST = '@@products/FETCH_REQUEST',
    FETCH_SUCCESS = '@@products/FETCH_SUCCESS',
    FETCH_ERROR = '@@products/FETCH_ERROR',

    DETAILS_REQUEST = '@@products/DETAILS_REQUEST',
    DETAILS_SUCCESS = '@@products/DETAILS_SUCCESS',
    DETAILS_ERROR = '@@products/DETAILS_ERROR',

    SELECTED = '@@products/SELECTED'
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability
  export interface ProductsState {
    readonly loading: boolean
    readonly data: IProduct[]
    readonly errors?: string
  }