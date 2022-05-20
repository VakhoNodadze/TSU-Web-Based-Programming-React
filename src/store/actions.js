import { ACTION_TYPE } from './actionTypes'

export const handleAddProduct = (product) => ({
  payload: product,
  type: ACTION_TYPE.ADD_PRODUCT_TO_CART
})

export const handleLoader = () => ({
  type: ACTION_TYPE.HANDLE_LOADER
})

export const handleSaveAllProducts = (allProducts) => ({
  payload: allProducts,
  type: ACTION_TYPE.SAVE_ALL_PRODUCTS
})