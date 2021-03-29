import {Actions} from './actionTypes';

export const setCartProducts = (product)=>{
    return {
        type: Actions.SET_CART_PRODUCT,
        payload: product
    }
}