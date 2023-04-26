import { createContext, useState } from "react";

export const ItemsCart = createContext(); // Creamos el contexto utilizando el Hook

let initialCart = 0;

export const ItemsCartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart)

  const añadirCarrito = () => {
    setCart (cart+1);
  }

  return (
    <ItemsCart.Provider value={{cart, setCart, añadirCarrito}}>
      {children}
    </ItemsCart.Provider>
  )
}