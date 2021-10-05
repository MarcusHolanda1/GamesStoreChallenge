import React, { useState, createContext } from "react";

export const ContextCart = createContext();

export const CartContext = props => {
  const [cartProducts, setCartProduct ] = useState([]);
  const [totalCartProducts, setTotalCartProducts] = useState(0);  

  const addCartProduct = (item) => {console.log(item)
    setCartProduct([...cartProducts, item])
  };  


  const removeCartProduct = (item) => {console.log()
    const index = cartProducts.findIndex((each) => each.cartproduct === item.cartproduct);
    cartProducts.splice(index, 1);
    setCartProduct([...cartProducts]);
  };  

  const calculateTotalProducts = () => {
    const calculate = cartProducts.reduce(
      (total, each) => each.cartproduct.onSaleValue * each.quantity + total,
      0,
    );
    setTotalCartProducts(calculate);
  };

  return (
    <ContextCart.Provider
      value={{
        cartProducts,
        totalCartProducts,
        addCartProduct,
        removeCartProduct,
        calculateTotalProducts,
      }}
    >
      {props.children}
    </ContextCart.Provider>
  );
};