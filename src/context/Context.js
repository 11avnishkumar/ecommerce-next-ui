import React, { useState } from 'react'
import { createContext } from "react";
export const  cartContext = createContext()

const Context = ({children}) => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  const removeCartHandler = (product) => {
    setCart(cart.filter((item => item.id !== product.id)))
  }
  const calculateItems = () => {
   return cart.length; 
  }
  return (
    <cartContext.Provider value={{handleAddToCart,removeCartHandler,calculateItems}}>
     {children}
    </cartContext.Provider>
  )
}

export default Context




