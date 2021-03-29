import {Actions} from '../Actions/actionTypes';

const INITIAL_STATE = {
    cart: []
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case Actions.SET_CART_PRODUCT:
            return {...state, cart: [...state.cart, action.payload]}
        default:
            return state;
    }
}

export default cartReducer;