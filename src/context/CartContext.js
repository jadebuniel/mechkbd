import React, {useState, createContext, useEffect} from 'react'
import { commerce } from "../component/commerce"

export const CartContext = createContext()

export const CartProvider = (props) => {
 const [cart, setCart] = useState({})

 useEffect(() => {
  const fetchCart = async() => {
   const res = await commerce.cart.retrieve()
   try {
    setCart(res)
   } catch (err) {
    console.log(err)
   }
  }
  fetchCart()
 }, [])
 return(
  <CartContext.Provider value={[cart, setCart]}>
   {props.children}
  </CartContext.Provider>
 )
}


