import axiosInstance from "../helper/axios";
import { productConstants } from "./constants";

export const getAllProduct= () =>{
    return async (dispatch) =>{
        dispatch({type: productConstants.GET_ALL_PRODUCT_REQUEST});
        const res = await axiosInstance.get('/allproducts');
        
        console.log("RESPONSE",res.data)
        if(res.status === 200){
            
            dispatch({
                type:productConstants.GET_ALL_PRODUCT_SUCCESS,
                payload:{
                    products: res.data
                }
            })
        }else{
            dispatch({
                type:productConstants.GET_ALL_PRODUCT_FAILURE,
                payload:{
                    error: res.data.error
                }
            })
        }
    }
}