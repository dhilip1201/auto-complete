
import axiosInstance from "../helper/axios";
import { cartConstants } from "./constants";
import store from "../store";


 const getCartItems = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: cartConstants.GET_CART_ITEM_REQUEST });
        const res = await axiosInstance.post(`/user/getCartItems`);
      
         
          if (res.status === 200) {
            
            dispatch({
              type: cartConstants.GET_CART_ITEM_SUCCESS,
              payload:{
                cartItems: res.data
            }
            });
          }
        
      } catch (error) {
        console.log(error);
      }
    };
  };




  
export const addToCart = (product, newQty = 1) => {

    return async (dispatch) => {
     
      const {
        cart: { cartItems }
        
      } = store.getState();
      // console.log('action::products', product);
      //const product = action.payload.product;
      //const products = state.products;
      const qty = cartItems[product._id]
        ? parseInt(cartItems[product._id].qty + newQty)
        : 1;
      cartItems[product._id] = {
        ...product,
        qty,
      };
      
      // if (auth.authenticate ) {
        dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
        const payload = {
          cartItems: [
            {
              product: product._id,
              quantity: qty,
            },
          ],
        };
        console.log("PAYLOAD_ADDTOCART",payload);
        const res = await axiosInstance.post(`/cart/addtocart`, payload);
        console.log(res);
        if (res.status === 201) {
          dispatch(getCartItems());
          
        }
      // } else {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      // }
  
      console.log("addToCart::", cartItems);
  
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
    };
  };

  
export const removeCartItem = (payload) => {
    return async (dispatch) => {
      try {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
        const res = await axiosInstance.post(`/user/cart/removeItem`, { payload });
        if (res.status === 202) {
          dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
          dispatch(getCartItems());
        } else {
          const { error } = res.data;
          dispatch({
            type: cartConstants.REMOVE_CART_ITEM_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  
export const updateCart = () => {
    return async (dispatch) => {
      
      let cartItems = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : null;
  
      
  
      
        localStorage.removeItem("cart");
        //dispatch(getCartItems());
        if (cartItems) {
          const payload = {
            cartItems: Object.keys(cartItems).map((key, index) => {
              return {
                quantity: cartItems[key].qty,
                product: cartItems[key]._id,
              };
            }),
          };
          if (Object.keys(cartItems).length > 0) {
            const res = await axiosInstance.post(`/user/cart/addtocart`, payload);
            if (res.status === 201) {
              dispatch(getCartItems());
            }
          }
        } else {
          dispatch(getCartItems());
        }
      
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      
    };
  };
  
  export { getCartItems };