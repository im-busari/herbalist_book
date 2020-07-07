import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import configureStore from './Store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApplicationState } from './store/index';

const history = createBrowserHistory()

const defaultValues = {
  data: [],
  errors: undefined,
  loading: false
}

const initialState : ApplicationState = {
  productsList: defaultValues,
  productsDetails: defaultValues
}
const store = configureStore(history, initialState)

ReactDOM.render(
  <Provider store={store}>
  <App />,
</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
