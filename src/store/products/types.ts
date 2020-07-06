// ./src/store/heroes/types.ts

// Response object for GET /heroes
// https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
export interface IProduct {
    _id: string;
    image: string;
    price: number;
    pricePerAmount: string;
    name: string;
    description: string;
}
  
  // This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
  // the expected return type of your API response.
  export type ApiResponse = Record<string, any>
  
  // Use `enum`s for better autocompletion of action type names. These will
  // be compiled away leaving only the final value in your compiled code.
  //
  // Define however naming conventions you'd like for your action types, but
  // personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
  // of Redux's `@@INIT` action.
  export enum ProductsActionTypes {
    FETCH_REQUEST = '@@products/FETCH_REQUEST',
    FETCH_SUCCESS = '@@products/FETCH_SUCCESS',
    FETCH_ERROR = '@@products/FETCH_ERROR',
    SELECTED = '@@products/SELECTED'
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability.
  // https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
  export interface ProductsState {
    readonly loading: boolean
    readonly data: IProduct[]
    readonly errors?: string
  }