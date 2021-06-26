import { productConstants } from "../actions/constants";
const initState = {
  products: [],
  loading: false,
  error: "",
};
export const productReducers = (state = initState, action) => {
  

  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        loading: false,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    
  }
  return state;
};
