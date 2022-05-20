import React, { useContext, useEffect, useReducer, useState } from 'react'

import { getAllProducts } from '../utils/services/products'

export const StoreContext = React.createContext()

export const useStore = () => useContext(StoreContext)


const StoreProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product])
  }
  

  useEffect(() => {
    const getProducts = async() => {
      setIsLoading(true)
      try {
        const data = await getAllProducts()
        setProducts(data.data)
        setIsLoading(false)
      } catch(err){
        console.log('Error occured', err)
        setIsLoading(false)
      }
    }

    getProducts()
  }, [])

  const globalState = {
    products,
    cart,
    isLoading,
    handleAddProduct
  }
    
  return (
    <StoreContext.Provider value={globalState}>
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider