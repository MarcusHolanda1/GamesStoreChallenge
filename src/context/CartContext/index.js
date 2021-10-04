import React, { useState, createContext, useEffect } from "react";

export const context = createContext();

export const CartContextProvider = props => {
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
    <context.Provider
      value={{
        products,
        setProduct,
      }}
    >
      {props.children}
    </context.Provider>
  );
};//product context