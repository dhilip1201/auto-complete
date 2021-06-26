import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: [],
    updatingCart: false,
    error: null
};

export const cartReducers = (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.GET_CART_ITEM_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.GET_CART_ITEM_SUCCESS:
            state = {
                ...state,
                updatingCart: true,
                cartItems: action.payload.cartItems,
            }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
    }
    return state;
}