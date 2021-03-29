import {Actions} from '../Actions/actionTypes';

const INITIAL_STATE = {
    allProducts: [],
    selectedProduct: {}
}

const productReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case Actions.SET_ALL_PRODUCTS:
            return {...state, allProducts: action.payload}
        case Actions.SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        default:
            return state;
    }
}

export default productReducer;