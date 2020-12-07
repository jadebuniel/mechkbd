import React, { useState, createContext, useEffect } from 'react'
import { commerce } from "../component/commerce"
import { useHistory } from 'react-router-dom'

export const Context = createContext()

 const categories = ["keyboards", "keycaps", "switches", "miscellaneous"]
 
 export const ContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [location, setLocation] = useState('')
  const history = useHistory()
  const [loading, setLoading] = useState(false)


useEffect(() => {
history.listen((location) => setLocation(location.pathname))
}, [history])

const fetchProducts = async () => {
 setLoading(true)
 const url = window.location.href.split('/')
 const { data } = await commerce.products.list()
 const catList = data.filter(product => product.categories[0].slug === url[url.length - 1])
 
  try {
   setProducts((categories.includes(url[url.length - 1])) ? catList : data)
    setLoading(false)
  } catch (err) {
   console.log(err.message)
  }
 }
 useEffect(() => {
  fetchProducts()
 }, [location])

 return (
  <Context.Provider value={[products, setProducts, loading]}>
   {props.children}
  </Context.Provider>
 )
}
