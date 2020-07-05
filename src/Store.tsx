import { Reducer, createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from "axios";

export interface IState {
    productsList: {
        products: [],
        loading: boolean,
        error: []
    }
}

interface IAction {
    type: string,
    payload: any,
}

interface IReducer {
    products: []
    loading: boolean,
    error: []
}


const initialState : IReducer = {
    products: [],
    loading: false,
    error: []
}


const productListReducer: Reducer<IReducer> = (state = initialState , action: IAction) => {

    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return { products: [], loading: true, error: [] };
        case "PRODUCT_LIST_SUCCESS":
            return  { products: action.payload, loading: false, error: [] };
        case "PRODUCT_LIST_FAIL":
            return  { products: [], loading: false, error: action.payload };
        default:
            return state;
    }    
}

export const listProducts = () => async (dispatch: any) => {
    try {
        dispatch({ type: "PRODUCT_LIST_REQUEST" });
        const { data } = await axios.get("/api/products")

        dispatch({type: "PRODUCT_LIST_SUCCESS", payload: data })

    } catch (error) {

        dispatch({ type: "PRODUCT_LIST_FAIL", payload: error.message })
        
    }
}

const reducer = combineReducers<IState>({
    productsList: productListReducer,
})

const composeEnhancer = compose; //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;