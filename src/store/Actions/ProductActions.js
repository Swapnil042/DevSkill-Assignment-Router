import {Actions} from './actionTypes';

export const setAllProducts = (products)=>{
    return {
        type: Actions.SET_ALL_PRODUCTS,
        payload: products
    }
}

export const setSelectedProduct = (product)=>{
    return {
        type: Actions.SET_SELECTED_PRODUCT,
        payload: product
    }
}