


import { combineReducers } from "redux";
import { productReducers } from "./product.reducers";
import { cartReducers } from "./cart.reducers";


const rootReducer = combineReducers({
    product:productReducers,
    cart:cartReducers
})

export default rootReducer;