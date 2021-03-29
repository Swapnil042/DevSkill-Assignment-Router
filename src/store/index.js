import {createStore, combineReducers, compose} from 'redux';

import CartReducer from './reducers/CartReducer';
import ProductReducer from './reducers/ProductReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const mainReducer = combineReducers({
    productStore: ProductReducer,
    cartStore: CartReducer
});

const store = createStore(mainReducer, composeEnhancers());

export default store;
