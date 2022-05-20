import React, { useContext, useEffect, useReducer, useState } from 'react'

import { getAllProducts } from '../utils/services/products'
import { reducer } from './reducer'
import { ACTION_TYPE } from './actionTypes'

export const StoreContext = React.createContext()

export const useStore = () => useContext(StoreContext)

const initialState = {
  products: [],
  cart: [],
  isLoading: false
}


const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: ACTION_TYPE.HANDLE_LOADER })
      try {
        const data = await getAllProducts()
        dispatch({ type: ACTION_TYPE.SAVE_ALL_PRODUCTS, payload: data.data })
        dispatch({ type: ACTION_TYPE.HANDLE_LOADER })
      } catch (err) {
        console.log(err)
        dispatch({ type: ACTION_TYPE.HANDLE_LOADER })
      }
    }
    getProducts()
  }, [])


  const value = {
    state,
    dispatch
  }

    
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider