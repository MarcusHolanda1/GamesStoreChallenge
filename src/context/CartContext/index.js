import React, { useState, createContext, useEffect, useCallback } from "react";

export const ContextCart = createContext();

export const CartContext = props => {
  const [cartProducts, setCartProduct ] = useState([]);
  const [totalCartProducts, setTotalCartProducts] = useState(0);  
  const [freight, setFreight] = useState(0)

  const addCartProduct = (item) => {console.log(item)
    setCartProduct([...cartProducts, item])
  };  

  const removeCartProduct = (item) => {
    const index = cartProducts.findIndex((each) => each.id === item.id);
    cartProducts.splice(index, 1);
    setCartProduct([...cartProducts]);
  };  

  const calculateFreight = useCallback(() => {
    if (totalCartProducts >= Number(process.env.REACT_APP_FREIGHT_VALUE)){
      setFreight(0)
    } else {
      const total = cartProducts.length * Number(process.env.REACT_APP_ITEM_FREIGHT_VALUE)
      setFreight(total) 
    }
  },[totalCartProducts,cartProducts])

  const calculateTotalProducts = useCallback(() => {
    let totalValue = 0
    for (const eachProduct of cartProducts) {
      totalValue += eachProduct.price
    }
    setTotalCartProducts(totalValue)
  },[cartProducts])

  useEffect(() => {
    calculateTotalProducts()
  },[calculateTotalProducts])
 
  useEffect(() => {
    calculateFreight()
  },[calculateFreight])

  return (
    <ContextCart.Provider
      value={{
        cartProducts,
        totalCartProducts,
        addCartProduct,
        removeCartProduct,
        freight,
      }}
    >
      {props.children}
    </ContextCart.Provider>
  );
};