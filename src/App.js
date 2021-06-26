
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home'
import Cart from './containers/Cart'
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./actions";
function App() {

  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  useEffect(() => {
    dispatch(getCartItems());
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);
  useEffect(() => {
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart"  component={Cart} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
