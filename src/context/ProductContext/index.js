import React, { useState, createContext, useEffect } from "react";

export const ContextProduct = createContext();

export const ProductContext = props => {
  const [ products, setProduct ] = useState([]);

   useEffect(() => {
    fetch("./products.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <ContextProduct.Provider
      value={{
        products,
        setProduct,
      }}
    >
      {props.children}
    </ContextProduct.Provider>
  );
};