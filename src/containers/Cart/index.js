import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../actions";
import Layout from '../../components/Layout'
import CartItem from "./CartItem";
/**
* @author
* @function Cart
**/

const Cart = (props) => {

  // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  // useEffect(() => {
  //   dispatch(getCartItems());
  //   setCartItems(cart.cartItems);
  // }, [cart.cartItems]);
  // useEffect(() => {
  // }, []);

 

console.log("CARDITEMS", cartItems);


// if (props.onlyCartItems) {
//   return (
//     <>
//       {Object.keys(cartItems).map((key, index) => (
//         // <CartItem
//         //   key={index}
//         //   cartItem={cartItems[key]}
//         // />
//         <h1 key={index}>{cartItems[key]}</h1>
//       ))}
//     </>
//   );
// }

  return(
    <Layout >
        <h3>Cart Page</h3>
        
        {
          cartItems.cart.map((item , index) => (
            <div key={index}>{
              item.cartItems.map((item1, index1)=>(
                <div key={index1} style={{border:'1px solid #ddd',width:'30%'}}  >

                  <div>
                    <h5>Product Id : <span>{item1.product}</span></h5>
                  </div>
                  <div>
                    <h4>Quantity : <span>{item1.quantity}</span></h4>
                    
                  </div>
                  
                  </div>
              ))
            }
            </div>
          ))
            
        }


      {/* {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              
            />
            
          ))} */}
        
    </Layout>
   )

 }

export default Cart