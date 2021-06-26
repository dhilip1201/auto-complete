import React, { useState } from "react";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {

  const { _id,product,quantity  } = props.cartItem;



  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        
        <div className="cartItemDetails">
          <div>
            <p>{product}</p>
            
          </div>
          
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        
      </div>
    </div>
  );
};

export default CartItem;